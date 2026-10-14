import type { Collections } from '@nuxt/content';

/* Loads the document of a data collection: one JSON file in content/ (see content.config.ts).
   Fetched from the server API, also on client-side navigation (see server/api/content/). */
export const useContentData = <T extends keyof Collections>(collection: T) =>
  useFetch<Collections[T]>(`/api/content/${collection}`, { key: `content-${collection}` });
