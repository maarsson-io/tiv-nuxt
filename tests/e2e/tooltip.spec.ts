import type { Locator } from '@playwright/test';
import { type SwiperElement, expect, test } from './fixtures';

test.skip(({ isMobile }) => isMobile, 'Tooltips need a hover');

const tooltipOpacity = (element: Locator) =>
  element.evaluate(el => getComputedStyle(el, '::after').opacity);

const tooltipText = (element: Locator) =>
  element.evaluate(el => getComputedStyle(el, '::after').content);

const expectTooltipOnHover = async (element: Locator, text: string) => {
  await expect(element).toHaveAttribute('data-tooltip', text);
  expect(await tooltipText(element)).toBe(JSON.stringify(text));
  expect(await tooltipOpacity(element)).toBe('0');

  await element.hover();

  await expect.poll(() => tooltipOpacity(element)).toBe('1');
};

test('/sponsors shows the sponsor name on hover', async ({ page }) => {
  await page.goto('/sponsors');
  const sponsor = page.locator('.award-img:has(img)').first();
  const name = await sponsor.locator('img').getAttribute('alt');

  await expectTooltipOnHover(sponsor, name!);
});

test('startpage sponsor carousel shows the sponsor name on hover', async ({ page }) => {
  await page.goto('/');
  const carousel = page.locator('.swiper', { has: page.locator('.client-thumb') });

  await carousel.scrollIntoViewIfNeeded();
  await carousel.evaluate((el: SwiperElement) => el.swiper?.autoplay?.stop());

  const sponsor = carousel.locator('.client-thumb:has(img)').filter({ visible: true }).first();
  const name = await sponsor.locator('img').getAttribute('alt');

  await expectTooltipOnHover(sponsor, name!);
});
