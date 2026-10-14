import { defineNuxtModule } from 'nuxt/kit';
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

/* Fields that contain Markdown text, per collection. `*` matches every array item.
   They are parsed at build time, so the browser only receives the rendered tree
   and never has to download the Markdown parser. */
const markdownFields: Record<string, string[]> = {
  about: [
    'text_block_one.paragraphs.*.*',
    'text_block_two.paragraphs.*.*',
    'text_block_three.paragraphs.*.*',
  ],
  contact: ['texts.*'],
  sponsoring: ['text.paragraphs.*.*'],
};

// Converts Markdown text into the tree that MDCRenderer renders.
const toTree = async (markdown: string) => (await parseMarkdown(markdown)).body;

// The keys a path segment selects: every key for `*`, otherwise the segment itself.
const keysOf = (target: object, segment: string): string[] => (segment === '*' ? Object.keys(target) : [segment]);

// Converts the Markdown strings found at `path` inside `target`, in place.
const convertAt = async (target: any, path: string[]): Promise<void> => {
  const [segment, ...rest] = path;

  if (target === null || target === undefined || segment === undefined) {
    return;
  }

  for (const key of keysOf(target, segment)) {
    await convertValue(target, key, rest);
  }
};

// Follows the rest of the path below `target[key]`, or converts it at the end of the path.
const convertValue = async (target: any, key: string, rest: string[]): Promise<void> => {
  if (rest.length > 0) {
    await convertAt(target[key], rest);
    return;
  }

  if (typeof target[key] === 'string') {
    target[key] = await toTree(target[key]);
  }
};

export default defineNuxtModule({
  meta: { name: 'content-markdown' },
  setup(_options, nuxt) {
    nuxt.hook('content:file:afterParse', async ({ collection, content }) => {
      for (const path of markdownFields[collection.name] ?? []) {
        await convertAt(content, path.split('.'));
      }
    });
  },
});
