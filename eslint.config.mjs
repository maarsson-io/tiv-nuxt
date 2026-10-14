// Based on the shared ruleset of maarsson/coding-standard (resources/eslint.config.mjs.dist).
// The base JavaScript, TypeScript, Vue and @stylistic configs come from @nuxt/eslint
// (withNuxt), which also knows Nuxt's auto-imports; the shared rules are added on top.
import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    ignores: [
      'playwright-report/**',
      'test-results/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,ts,vue}'],
    rules: {
      // ESLINT
      'no-duplicate-imports': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-unreachable-loop': ['error'],
      // ESLINT SUGGESTIONS
      'arrow-body-style': ['error', 'as-needed'],
      'complexity': ['warn', 5],
      'curly': ['error', 'all'],
      'default-case': ['error'],
      'eqeqeq': ['error', 'always'],
      'logical-assignment-operators': ['error', 'always'],
      'max-classes-per-file': ['error', 1],
      'max-depth': ['warn', 3],
      'max-lines-per-function': ['warn', {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      }],
      'max-nested-callbacks': ['warn', 2],
      'max-params': ['warn', 3],
      'no-alert': ['error'],
      'no-else-return': ['error'],
      'no-empty-function': ['error'],
      'no-invalid-this': ['error'],
      'no-lone-blocks': ['error'],
      'no-nested-ternary': ['error'],
      'no-param-reassign': ['error'],
      'no-var': ['error'],
      'prefer-const': ['error'],
      'require-await': ['error'],
      'sort-imports': ['warn', {
        allowSeparatedGroups: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      }],
      'yoda': ['error', 'never'],
      // STYLISTIC
      '@stylistic/multiline-comment-style': ['warn', 'bare-block'],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
      }],
      '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      // ESLINT SUGGESTIONS
      'consistent-return': ['error'],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      // VUE
      'vue/multi-word-component-names': ['off'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/eqeqeq': ['error', 'always'],
      'vue/html-indent': ['error'],
      'vue/no-v-html': ['error'],
    },
  },
  {
    // Code that runs in Node.js rather than in the browser.
    files: ['*.config.*', '.githooks/**', 'modules/**', 'server/**', 'tests/**'],
    languageOptions: {
      globals: globals.node,
    },
  },
);
