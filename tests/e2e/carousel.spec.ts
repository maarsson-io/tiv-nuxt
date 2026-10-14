import type { Locator } from '@playwright/test';
import { type SwiperElement, expect, test } from './fixtures';

const carousels = [
  { page: '/', name: 'startpage testimonials', selector: '.testimonial-wrap-2 .swiper' },
  { page: '/', name: 'startpage sponsors', selector: '[data-testid="sponsor-carousel"] .swiper' },
  { page: '/about', name: 'about testimonials', selector: '.testimonial-wrap .swiper' },
];

const swiperState = (carousel: Locator) =>
  carousel.evaluate((el: SwiperElement) => {
    if (!el.swiper) {
      return { initialized: false, autoplay: false, activeIndex: 0 };
    }

    const { initialized, autoplay, activeIndex } = el.swiper;

    return { initialized, autoplay: autoplay?.running === true, activeIndex };
  });

for (const { page: path, name, selector } of carousels) {
  test(`${name} carousel plays and responds to the pagination`, async ({ page }) => {
    await page.goto(path);
    const carousel = page.locator(selector);

    await expect.poll(() => swiperState(carousel)).toMatchObject({ initialized: true, autoplay: true });

    const bullets = carousel.locator('.swiper-pagination-bullet');

    // Fewer slides than fit on the screen leave nothing to page through.
    if (await bullets.count() < 2) {
      return;
    }

    await carousel.evaluate((el: SwiperElement) => el.swiper?.autoplay?.stop());
    await bullets.nth(1).click();

    await expect.poll(async () => (await swiperState(carousel)).activeIndex).toBeGreaterThan(0);
  });
}
