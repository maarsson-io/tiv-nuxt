import type { Locator } from '@playwright/test';
import { activeSponsors } from '../../app/utils/sponsors';
import { content, expect, test } from './fixtures';

/* Uses the real date: the expected list is computed from sponsors.json with the
   same rule the site uses, so it follows content updates and expiring sponsors. */
const sponsors: { name: string; date: string; premium: boolean }[] = content('sponsors').sponsors;

// A sponsor shows either their logo (name in the alt text) or their name.
const shownNames = (items: Locator) =>
  items.evaluateAll(elements =>
    elements.map(element => element.querySelector('img')?.getAttribute('alt') ?? element.textContent!.trim()),
  );

test('/sponsors lists the active sponsors in alphabetical order', async ({ page }) => {
  await page.goto('/sponsors');

  const names = await shownNames(page.getByTestId('sponsor-grid').locator('.award-img'));

  expect(names).toEqual(activeSponsors(sponsors).map(sponsor => sponsor.name));
});

test('startpage lists the active premium sponsors in alphabetical order', async ({ page }) => {
  await page.goto('/');

  const names = await shownNames(page.getByTestId('sponsor-carousel').locator('.client-thumb'));

  expect(names).toEqual(
    activeSponsors(sponsors)
      .filter(sponsor => sponsor.premium)
      .map(sponsor => sponsor.name),
  );
});
