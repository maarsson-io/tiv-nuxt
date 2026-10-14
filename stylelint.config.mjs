// Based on the shared ruleset of maarsson/coding-standard (resources/stylelint.config.mjs.dist),
// without its Tailwind CSS parts: this project uses Bootstrap 4 and SCSS.
export default {
  plugins: ['@stylistic/stylelint-plugin'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
  ],
  ignoreFiles: [
    '**/*.min.css',
    '**/node_modules/**',
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'playwright-report/**',
    'test-results/**',
  ],
  rules: {
    '@stylistic/indentation': 2,
  },
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.vue'],
      rules: {
        'selector-class-pattern': [
          '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$',
          {
            message: 'Expected class selector to use kebab-case or BEM',
          },
        ],
      },
    },
  ],
};
