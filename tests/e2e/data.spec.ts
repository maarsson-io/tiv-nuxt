import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { content, expect, test } from './fixtures';

// Checks the content files themselves, so typos are caught before they silently hide content.
test.skip(({ isMobile }) => isMobile, 'Data checks do not depend on the viewport');

test.describe('sponsors.json', () => {
  const sponsors = content('sponsors').sponsors;

  for (const [index, sponsor] of sponsors.entries()) {
    test(`sponsor #${index + 1} (${sponsor.name}) is valid`, () => {
      // Required: name and date. Optional: link and logo (shown instead of the name).
      expect(sponsor.name, 'name').toEqual(expect.any(String));
      expect(sponsor.name.trim(), 'name').not.toBe('');
      expect(sponsor.name, 'name has no surrounding spaces').toBe(sponsor.name.trim());
      expect(sponsor.premium, 'premium (shown on the startpage)').toEqual(expect.any(Boolean));

      // A valid calendar date in YYYY-MM-DD format, not in the future.
      expect(sponsor.date, 'date format').toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const date = new Date(`${sponsor.date}T00:00:00Z`);
      expect(date.toISOString().slice(0, 10), 'date exists in the calendar').toBe(sponsor.date);
      expect(date.getTime(), 'date is not in the future').toBeLessThanOrEqual(Date.now());

      if (sponsor.link !== null) {
        expect(sponsor.link, 'link').toMatch(/^https?:\/\//);
      }

      if (sponsor.logo !== null) {
        expect(existsSync(join(__dirname, '../../public', sponsor.logo)), `logo file ${sponsor.logo}`).toBe(true);
      }
    });
  }
});
