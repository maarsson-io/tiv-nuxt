import { content, expect, routes, test } from './fixtures';

for (const route of routes) {
  test(`${route.path} loads`, async ({ page }) => {
    const response = await page.goto(route.path);

    expect(response?.status()).toBe(200);
    await expect(page.locator('h1').first()).toHaveText(route.title);
    await expect(page.locator('#navbar')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    // Attribute interpolation is not supported by Vue and renders literally.
    await expect(page.locator('img[alt*="{{"]')).toHaveCount(0);
  });
}

test('unknown page shows the error page', async ({ page, consoleErrors }) => {
  const response = await page.goto('/this-page-does-not-exist');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: content('error').header.title })).toBeVisible();
  await expect(page.getByRole('button', { name: content('error').button })).toBeVisible();

  // The 404 itself is logged by the router; anything else is a real error.
  const unexpected = consoleErrors.filter((error) => !/404|not found/i.test(error));
  consoleErrors.length = 0;
  expect(unexpected).toEqual([]);
});
