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

// An object or array in the parsed JSON content, whose values are read by key.
type Node = Record<string, unknown>;

const isNode = (value: unknown): value is Node => typeof value === 'object' && value !== null;

// The keys a path segment selects: every key for `*`, otherwise the segment itself.
const keysOf = (target: Node, segment: string): string[] => (segment === '*' ? Object.keys(target) : [segment]);

// Converts the Markdown strings found at `path` inside `target`, in place.
const convertAt = async (target: unknown, path: string[]): Promise<void> => {
  const [segment, ...rest] = path;

  if (!isNode(target) || segment === undefined) {
    return;
  }

  for (const key of keysOf(target, segment)) {
    await convertValue(target, key, rest);
  }
};

// Follows the rest of the path below `target[key]`, or converts it at the end of the path.
const convertValue = async (target: Node, key: string, rest: string[]): Promise<void> => {
  const value = target[key];

  if (rest.length > 0) {
    await convertAt(value, rest);
    return;
  }

  if (typeof value === 'string') {
    target[key] = await toTree(value);
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
