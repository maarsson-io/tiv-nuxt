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

type Transform = (value: string) => Promise<unknown>;

const transformAt = async (target: any, path: string[], transform: Transform): Promise<void> => {
  const [key, ...rest] = path;

  if (target === null || target === undefined || key === undefined) {
    return;
  }

  const keys = key === '*' ? Object.keys(target) : [key];

  for (const current of keys) {
    if (rest.length > 0) {
      await transformAt(target[current], rest, transform);
    }
    else if (typeof target[current] === 'string') {
      target[current] = await transform(target[current]);
    }
  }
};

export default defineNuxtModule({
  meta: { name: 'content-markdown' },
  setup(_options, nuxt) {
    nuxt.hook('content:file:afterParse', async ({ collection, content }) => {
      for (const path of markdownFields[collection.name] ?? []) {
        await transformAt(content, path.split('.'), async value => (await parseMarkdown(value)).body);
      }
    });
  },
});
