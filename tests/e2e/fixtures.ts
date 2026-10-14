import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test as base, expect } from '@playwright/test';

// Reads a file from content/, so assertions follow the actual page data.
export const content = (name: string) =>
  JSON.parse(readFileSync(join(import.meta.dirname, '../../content', `${name}.json`), 'utf8'));

export const routes = [
  { path: '/', title: content('index').slider.title },
  { path: '/about', title: content('about').header.title },
  { path: '/news', title: content('news').header.title },
  { path: '/sponsors', title: content('sponsors').header.title },
  { path: '/sponsoring', title: content('sponsoring').header.title },
  { path: '/contact', title: content('contact').header.title },
  { path: '/contact-tips', title: content('contact-tips').header.title },
  { path: '/contact-driver', title: content('contact-driver').header.title },
  { path: '/cookies', title: content('cookies').header.title },
];

// The news page shows the images of the linked articles from the local news site.
const allowedThirdParty = [/^https:\/\/(www\.)?vittsjobjarnum\.nu\/images\//];

type Fixtures = {
  consoleErrors: string[];
};

export const test = base.extend<Fixtures>({
  // Every test fails on browser console errors and uncaught exceptions.
  consoleErrors: [async ({ page }, use) => {
    const errors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        errors.push(message.text());
      }
    });
    page.on('pageerror', (error) => errors.push(error.message));

    await use(errors);

    expect(errors, 'browser console errors').toEqual([]);
  }, { auto: true }],

  // Third-party requests are answered locally and never leave the test browser.
  // Apart from the allowed ones below, any third-party request fails the test.
  page: async ({ page, baseURL }, use) => {
    const thirdParty: string[] = [];

    await page.route(
      (url) => !url.href.startsWith(baseURL!),
      (route) => {
        const url = route.request().url();

        if (!allowedThirdParty.some((pattern) => pattern.test(url))) {
          thirdParty.push(url);
        }

        return route.fulfill({ status: 204 });
      },
    );

    await use(page);

    expect(thirdParty, 'third-party requests').toEqual([]);
  },
});

// Marks the window so a test can tell client-side navigation from a full reload.
export const markWindow = (page: import('@playwright/test').Page) =>
  page.evaluate(() => {
    (window as any).__e2eMarker = true;
  });

export const isSameWindow = (page: import('@playwright/test').Page) =>
  page.evaluate(() => (window as any).__e2eMarker === true);

export { expect };
