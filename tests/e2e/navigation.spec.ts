import { content, expect, isSameWindow, markWindow, routes, test } from './fixtures';

const navigation = content('navigation').items;
const titleOf = (path: string) => routes.find((route) => route.path === path)!.title;

const topLevel = navigation.filter((item: any) => item.link);
const dropdown = navigation.find((item: any) => item.items);

test.describe('header menu', () => {
  test.skip(({ isMobile }) => isMobile, 'Desktop menu');

  for (const item of topLevel) {
    test(`navigates to ${item.link}`, async ({ page }) => {
      await page.goto('/');
      await markWindow(page);

      await page.locator('#navbar').getByRole('link', { name: item.title, exact: true }).click();

      await expect(page).toHaveURL(item.link);
      await expect(page.locator('h1').first()).toHaveText(titleOf(item.link));
      expect(await isSameWindow(page), 'client-side navigation').toBe(true);
    });
  }

  for (const item of dropdown.items) {
    test(`navigates to ${item.link} through the dropdown`, async ({ page }) => {
      await page.goto('/');
      await markWindow(page);

      await page.locator('#navbar').getByRole('link', { name: dropdown.title }).click();
      await page.locator('#navbar .dropdown-menu').getByRole('link', { name: item.title }).click();

      await expect(page).toHaveURL(item.link);
      await expect(page.locator('h1').first()).toHaveText(titleOf(item.link));
      expect(await isSameWindow(page), 'client-side navigation').toBe(true);
    });
  }
});

test.describe('mobile menu', () => {
  test.skip(({ isMobile }) => !isMobile, 'Mobile menu');

  test('opens, navigates and closes', async ({ page }) => {
    await page.goto('/');
    const menu = page.locator('#navbarmain');

    await expect(menu).toBeHidden();
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await expect(menu).toBeVisible();

    await menu.getByRole('link', { name: topLevel[0].title, exact: true }).click();

    await expect(page).toHaveURL(topLevel[0].link);
    await expect(menu).toBeHidden();
  });
});

test.describe('footer menu', () => {
  const footerItems = [...topLevel, ...dropdown.items].filter((item: any) => item.footer);

  for (const item of footerItems) {
    test(`navigates to ${item.link}`, async ({ page }) => {
      await page.goto('/');
      await markWindow(page);

      await page.locator('.footer-menu').getByRole('link', { name: item.title, exact: true }).click();

      await expect(page).toHaveURL(item.link);
      await expect(page.locator('h1').first()).toHaveText(titleOf(item.link));
      expect(await isSameWindow(page), 'client-side navigation').toBe(true);
    });
  }
});

test.describe('content links', () => {
  test('slider button opens /about', async ({ page }) => {
    await page.goto('/');
    await markWindow(page);

    await page.locator('.banner').getByRole('link', { name: content('index').slider.button }).click();

    await expect(page).toHaveURL('/about');
    expect(await isSameWindow(page), 'client-side navigation').toBe(true);
  });

  test('markdown link on /sponsoring opens /sponsors', async ({ page }) => {
    await page.goto('/sponsoring');
    await markWindow(page);

    await page.getByRole('link', { name: 'vår sponsorsida' }).click();

    await expect(page).toHaveURL('/sponsors');
    await expect(page.locator('h1').first()).toHaveText(titleOf('/sponsors'));
    expect(await isSameWindow(page), 'client-side navigation').toBe(true);
  });
});
