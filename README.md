# Trygg i Vittsjö

Source code for [tryggivittsjo.se](https://tryggivittsjo.se), the website of Trygg i Vittsjö, a nonprofit, nonpartisan association working to prevent crime in Vittsjö, Emmaljunga, and the surrounding area in north Skåne, Sweden.

The website is built with Nuxt 4, Vue, and Nuxt Content 3. It is maintained and hosted free of charge as volunteer work.

## Project structure

- `app/` contains the application code:
  - `pages/` defines the website's routes.
  - `components/` contains reusable UI components.
  - `layouts/` contains the page layout.
  - `utils/` contains shared logic, such as the sponsor visibility rule.
  - `composables/` contains `useContentData()`, which loads a page's content.
  - `assets/` contains styles and scripts.
- `content/` contains the website's JSON content, including news and sponsors.
- `content.config.ts` defines one Nuxt Content collection per JSON file.
- `server/api/content/` serves the collections, so content is always queried on the server.
- `modules/content-markdown.ts` lists the content fields written in Markdown and renders them at build time.
- `public/` contains images, logos, favicons, and other static files.
- `tests/e2e/` contains the end-to-end tests.

## Content

Each page reads one JSON file from `content/`. To change a text, edit the JSON file; no code change is needed.

A few texts support Markdown, for example `**bold**` and `[links](/sponsors)`. These fields are listed in `modules/content-markdown.ts`. To use Markdown in another field, add its path there.

When adding a new top-level field to a JSON file, also add it to the collection's schema in `content.config.ts`. Fields missing from the schema are not available to the page, and nested data must be declared as an object or a list. Nuxt Content does not reject invalid data, so `tests/e2e/data.spec.ts` validates the sponsors file.

## Setup

Install the dependencies from the committed lockfile using npm:

```bash
npm ci
```

This also activates the versioned Git hooks in `.githooks/` (see [Testing](#testing)).

Install the browser for the end-to-end tests once per machine:

```bash
npx playwright install chromium
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Production runs the Node server built by `npm run build`. The build output in `.output/` is self-contained and does not need `node_modules` at runtime.

Build the site for production:

```bash
npm ci
npm run build
npm prune --omit=dev
```

The build needs the development dependencies, so `npm ci` installs all of them. `npm prune --omit=dev` removes them after the build, so only the production dependencies remain on the server.

Start the server:

```bash
node .output/server/index.mjs
```

Locally preview production build:

```bash
npm run preview
```

## Testing

The end-to-end tests use [Playwright](https://playwright.dev) and run in Chromium against the production server build, the same Node server that runs in production, in a desktop and a mobile viewport. They live in `tests/e2e/`:

- `smoke.spec.ts` checks that every page loads with its title, and that unknown URLs show the error page.
- `navigation.spec.ts` follows the header, dropdown, mobile, and footer menus and the content links.
- `content.spec.ts` checks the Markdown-formatted texts and contact details.
- `tooltip.spec.ts` checks the sponsor name tooltips.
- `sponsors.spec.ts` checks that the sponsor page and the startpage list exactly the active sponsors, using the real date and the same rule as the website (`app/utils/sponsors.ts`).
- `visual.spec.ts` compares full-page screenshots with stored baselines.
- `data.spec.ts` validates the content files, for example that every sponsor has a valid, non-future date and an existing logo file.

Expected titles and menu items are read from `content/`, so editing the JSON content does not break the tests. Only the few literal texts in `content.spec.ts` need updating when those texts change.

Every test fails on browser console errors. Requests to third-party services, such as telemetry, are blocked during the tests.

Build the site, then run the tests. The tests start the built server on port 4173 themselves:

```bash
npm run build
npm run test:e2e
```

Open the interactive test runner to watch the tests step by step:

```bash
npx playwright test --ui
```

### Visual baselines

The screenshot baselines are stored locally in `tests/e2e/__screenshots__/` and are not committed, because they are large and depend on the operating system's font rendering. Missing baselines are created on the first run.

The sponsor lists are masked in the screenshots, because they change with every payment and expiry. Adding a sponsor or updating a payment date therefore does not affect the visual tests; `sponsors.spec.ts` checks the lists instead.

When a page changes on purpose, for example after editing a text or adding a sponsor, the visual tests of the affected pages fail. This is expected. To accept the change:

1. Read the summary at the end of the test output. Only tests named `... looks unchanged @visual` should fail, and only for the pages you changed. If any other test fails, or a page you did not touch fails, something is broken: fix it first.
2. Open `test-results/`. Each failed visual test has its own folder, for example `visual--sponsors-looks-unchanged-desktop/`, with three images:
   - `sponsors-expected.png`: the stored baseline, before your change.
   - `sponsors-actual.png`: the page as it looks now.
   - `sponsors-diff.png`: the differences highlighted in red.
3. Check the `-diff` image. The red areas should match your change and nothing else. If something else changed too, for example a shifted layout, the change has a side effect: fix it first.
4. If the differences are exactly what you intended, refresh the baselines:

   ```bash
   npm run test:e2e -- --grep @visual --update-snapshots
   ```

   This replaces the stored screenshots of all pages with the current state, so run it only after step 3.
5. Run the full suite again. It should now pass:

   ```bash
   npm run test:e2e
   ```

The baselines are not committed, so there is nothing to commit after refreshing them.

### Githooks

The `.githooks/pre-commit` blocks commits directly on master; work on develop or a feature/* / hotfix/* branch.

The `.githooks/pre-push` hook builds the site and runs all tests before every push, and aborts the push if anything fails. It takes about 15–40 seconds. To skip it once:


```bash
git push --no-verify
```

The hook tests the working tree, including uncommitted changes. If it fails on a visual test after an intended change, follow the steps in [Visual baselines](#visual-baselines), then push again.

### Continuous integration

The CI workflow builds the site and runs all tests except the visual ones on every pull request to `develop` and `master` and on every push to `develop`. On failure, the Playwright report is uploaded as a workflow artifact.

## License

All rights reserved for original project code and website materials, except for third-party materials licensed separately. Prior written permission from the relevant rights holder is required for reuse. Requests should be sent to Trygg i Vittsjö via the [contact page](https://tryggivittsjo.se/contact). See [LICENSE](LICENSE) for the full notice and third-party exceptions.

### Template license

This website uses and adapts the [Novena Bootstrap template](https://github.com/themefisher/novena-bootstrap) by Themefisher. The template and code derived from it are covered by its [MIT license](licenses/novena-bootstrap-MIT.txt), reproduced unchanged with the original copyright notice.

This template license does not grant rights to unrelated project code, website content, photographs, or logos.
