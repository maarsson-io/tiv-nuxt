import type { Page } from '@playwright/test';
import { expect, routes, test } from './fixtures';

/* Counters count up whenever they enter or leave the viewport, including while a
   full-page screenshot is taken: let them finish, then freeze them at their final values. */
const finishCounters = async (page: Page) => {
  const counters = page.locator('.counter');

  if (await counters.count() === 0) {
    return;
  }

  for (const counter of await counters.all()) {
    await counter.scrollIntoViewIfNeeded();
  }

  let previous: string[] = [];

  await expect.poll(async () => {
    const current = await counters.allInnerTexts();
    const stable = JSON.stringify(current) === JSON.stringify(previous);
    previous = current;
    return stable;
  }, { intervals: [500] }).toBe(true);

  // Static copies: later restarts only update the detached originals.
  await page.evaluate(() => {
    document.querySelectorAll('.counter').forEach(counter => counter.replaceWith(counter.cloneNode(true)));
  });
  await page.evaluate(() => window.scrollTo(0, 0));
};

// Baseline screenshots; refresh with `npm run test:e2e -- --grep @visual --update-snapshots`.
for (const route of routes) {
  test(`${route.path} looks unchanged`, { tag: '@visual' }, async ({ page }) => {
    await page.goto(route.path);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    await finishCounters(page);

    // Carousels: stop autoplay and rewind, so every run shows the same slide.
    await page.evaluate(() => {
      document.querySelectorAll<any>('.swiper').forEach((el) => {
        el.swiper?.autoplay?.stop();
        el.swiper?.slideTo(0, 0);
      });
    });

    // The sponsor grid grows with the number of sponsors; a fixed height keeps the page size stable.
    await page.addStyleTag({
      content: '[data-testid="sponsor-grid"] { height: 600px !important; overflow: hidden !important; }',
    });

    const name = route.path === '/' ? 'home' : route.path.slice(1);

    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      // Sponsors change with every payment and expiry; sponsors.spec.ts checks them.
      mask: [page.getByTestId('sponsor-grid'), page.getByTestId('sponsor-carousel')],
    });
  });
}
