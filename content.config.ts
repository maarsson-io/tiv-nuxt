import { defineCollection, defineContentConfig, z } from '@nuxt/content';

// Every page reads one JSON file from content/, so each file is its own data collection.
// error.json is not a collection: the error page bundles it, so it works without a query.

const header = z.object({
  title: z.string(),
  description: z.string(),
});

// Nested data must be typed as an object or array, otherwise it is stored as text.
const object = z.record(z.string(), z.any());
const list = z.array(z.any());

const sponsor = z.object({
  premium: z.boolean(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  link: z.string().url().nullable(),
  name: z.string().min(1),
  logo: z.string().nullable(),
});

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'data',
      source: 'index.json',
      schema: z.object({
        slider: object,
        three_boxes: object,
        about: object,
        counter_boxes: z.array(z.object({
          icon: z.string(),
          count: z.number(),
          sup: z.string().nullable(),
          text: z.string(),
        })),
        testimonials: object,
        sponsors: object,
      }),
    }),
    about: defineCollection({
      type: 'data',
      source: 'about.json',
      schema: z.object({
        header,
        main_image: object,
        text_block_one: object,
        list_block: object,
        text_block_two: object,
        text_block_three: object,
        image_row_block: list,
        testimonials: object,
      }),
    }),
    news: defineCollection({
      type: 'data',
      source: 'news.json',
      schema: z.object({
        header,
        items: list,
      }),
    }),
    sponsors: defineCollection({
      type: 'data',
      source: 'sponsors.json',
      schema: z.object({
        header,
        text: object,
        sidebar: object,
        sponsors: z.array(sponsor),
      }),
    }),
    sponsoring: defineCollection({
      type: 'data',
      source: 'sponsoring.json',
      schema: z.object({
        header,
        main_image: object,
        text: object,
        sidebar: object,
      }),
    }),
    contact: defineCollection({
      type: 'data',
      source: 'contact.json',
      schema: z.object({
        header,
        boxes: list,
        texts: list,
      }),
    }),
    contactTips: defineCollection({
      type: 'data',
      source: 'contact-tips.json',
      schema: z.object({
        header,
      }),
    }),
    contactDriver: defineCollection({
      type: 'data',
      source: 'contact-driver.json',
      schema: z.object({
        header,
        text_block: object,
        list_block: object,
        sidebar: object,
        form_lead: z.string(),
      }),
    }),
    cookies: defineCollection({
      type: 'data',
      source: 'cookies.json',
      schema: z.object({
        header,
        updated: z.string(),
        intro: z.string(),
        sections: list,
        cookie_table: object,
        sources: object,
        contact: object,
      }),
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'navigation.json',
      schema: z.object({
        items: list,
      }),
    }),
    testimonials: defineCollection({
      type: 'data',
      source: 'testimonials.json',
      schema: z.object({
        blocks: list,
      }),
    }),
    footerDisclaimer: defineCollection({
      type: 'data',
      source: 'footer/disclaimer.json',
      schema: z.object({
        text: z.string(),
      }),
    }),
  },
});
