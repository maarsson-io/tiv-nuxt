// How long a sponsor stays visible after their latest payment.
export const SPONSOR_VISIBLE_MONTHS = 13;

type Sponsor = {
  name: string;
  date: string;
};

// A sponsor is shown while their latest payment (`date`) is within the visible period.
export const isSponsorActive = (sponsor: Sponsor, now: Date = new Date()): boolean => {
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - SPONSOR_VISIBLE_MONTHS);

  return new Date(sponsor.date) >= cutoff;
};

// Active sponsors in alphabetical order, as listed on the website.
export const activeSponsors = <T extends Sponsor>(sponsors: T[], now: Date = new Date()): T[] =>
  sponsors
    .filter(sponsor => isSponsorActive(sponsor, now))
    .sort((first, second) => (first.name > second.name ? 1 : -1));
