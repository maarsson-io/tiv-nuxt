import { expect, routes, test } from './fixtures';

// Baseline screenshots; refresh with `npm run test:e2e -- --grep @visual --update-snapshots`.
for (const route of routes) {
  test(`${route.path} looks unchanged`, { tag: '@visual' }, async ({ page }) => {
    await page.goto(route.path);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);

    // Carousels: stop autoplay and rewind, so every run shows the same slide.
    await page.evaluate(() => {
      document.querySelectorAll<any>('.swiper').forEach((el) => {
        el.swiper?.autoplay?.stop();
        el.swiper?.slideTo(0, 0);
      });
    });

    const name = route.path === '/' ? 'home' : route.path.slice(1);

    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      // Counters animate when scrolled into view.
      mask: [page.locator('.counter')],
    });
  });
}
