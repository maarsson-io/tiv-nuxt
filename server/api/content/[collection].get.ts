import type { Collections } from '@nuxt/content';
import { queryCollection } from '@nuxt/content/server';

// Every page's data comes through this endpoint, so the content is always queried
// on the server. Querying in the browser would download a WebAssembly SQLite
// database on the first client-side navigation.
const collections = new Set<string>([
  'home',
  'about',
  'news',
  'sponsors',
  'sponsoring',
  'contact',
  'contactTips',
  'contactDriver',
  'cookies',
  'navigation',
  'testimonials',
  'footerDisclaimer',
] satisfies (keyof Collections)[]);

export default defineEventHandler(async (event) => {
  const collection = getRouterParam(event, 'collection');

  if (!collection || !collections.has(collection)) {
    throw createError({ statusCode: 404, statusMessage: 'Content not found' });
  }

  return await queryCollection(event, collection as keyof Collections).first();
});
