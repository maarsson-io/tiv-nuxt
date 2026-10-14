import { content, expect, test } from './fixtures';

test.describe('markdown content', () => {
  test('/contact renders heading, phone links and emphasis', async ({ page }) => {
    await page.goto('/contact');
    const texts = page.locator('.contact-form-wrap .section-title');

    const heading = texts.getByRole('heading', { level: 4 });
    await expect(heading).toContainText('Vid nödsituation ring alltid');
    await expect(heading).toHaveCSS('color', 'rgb(164, 18, 20)');
    await expect(heading.getByRole('link', { name: '112' })).toHaveAttribute('href', 'tel:112');

    await expect(texts.getByRole('link', { name: '114 14' })).toHaveAttribute('href', 'tel:11414');
    await expect(texts.locator('strong')).toHaveText('Ring alltid i första hand polisen direkt! Ingrip inte själv!');
  });

  test('/sponsoring renders emphasis and internal link', async ({ page }) => {
    await page.goto('/sponsoring');

    await expect(page.locator('strong', { hasText: 'Swisha till oss' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'vår sponsorsida' })).toHaveAttribute('href', '/sponsors');
  });

  test('/about renders emphasis', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('strong', { hasText: 'Trygg i Vittsjö tackar alla' })).toBeVisible();
  });
});

test('/contact box lists payment details on separate lines', async ({ page }) => {
  await page.goto('/contact');
  const boxes: { title: string; lines?: string[] }[] = content('contact').boxes;
  const box = boxes.find(item => item.lines)!;
  const block = page.locator('.contact-block', { hasText: box.title });

  for (const line of box.lines!) {
    await expect(block.getByText(line, { exact: true })).toBeVisible();
  }
});

test.describe('image alt texts', () => {
  test('/contact-driver portrait', async ({ page }) => {
    await page.goto('/contact-driver');

    await expect(page.locator('.doctor-img-block img')).toHaveAttribute('alt', content('contact-driver').text_block.image.alt);
  });
});

// Counters display thousands separators, e.g. "4,550"; only the digits are compared.
const digitsOnly = (text: string) => text.replace(/\D/g, '');

test('startpage counters count up to the values in index.json', async ({ page }) => {
  await page.goto('/');
  const counters = page.locator('.counter');

  for (const counter of await counters.all()) {
    await counter.scrollIntoViewIfNeeded();
  }

  const counterBoxes: { count: number }[] = content('index').counter_boxes;
  const expected = counterBoxes.map(box => String(box.count));

  await expect.poll(async () => (await counters.allInnerTexts()).map(digitsOnly)).toEqual(expected);
});
