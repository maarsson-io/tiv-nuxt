# Trygg i Vittsjö

Source code for [tryggivittsjo.se](https://tryggivittsjo.se), the website of Trygg i Vittsjö, a nonprofit, nonpartisan association working to prevent crime in Vittsjö, Emmaljunga, and the surrounding area in north Skåne, Sweden.

The website is built with Nuxt 3, Vue, and Nuxt Content. It is maintained and hosted free of charge as volunteer work.

## Project structure

- `pages/` defines the website's routes.
- `components/` contains reusable UI components.
- `content/` contains the website's JSON content, including news and sponsors.
- `assets/` contains styles and scripts.
- `public/` contains images, logos, favicons, and other static files.

## Setup

Install the dependencies from the committed lockfile using npm:

```bash
npm ci
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

The production server uses the following build command:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## License

All rights reserved for original project code and website materials, except for third-party materials licensed separately. Prior written permission from the relevant rights holder is required for reuse. Requests should be sent to Trygg i Vittsjö via the [contact page](https://tryggivittsjo.se/contact). See [LICENSE](LICENSE) for the full notice and third-party exceptions.

### Template license

This website uses and adapts the [Novena Bootstrap template](https://github.com/themefisher/novena-bootstrap) by Themefisher. The template and code derived from it are covered by its [MIT license](licenses/novena-bootstrap-MIT.txt), reproduced unchanged with the original copyright notice.

This template license does not grant rights to unrelated project code, website content, photographs, or logos.
