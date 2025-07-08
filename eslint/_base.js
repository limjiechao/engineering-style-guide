// Constants
const globals = require('globals');
// Parsers
const babelParser = require('@babel/eslint-parser');
// Plugins
const importPlugin = require('eslint-plugin-import');
// Configs
const jsEslint = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');
const commentsConfig = require('./comments.js');
const unicornConfig = require('./unicorn.js');
const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./_constants.js');
// Rules
const bestPracticeRules = require('./rules/best-practice.js');
const es6Rules = require('./rules/es6.js');
const importRules = require('./rules/import.js');
const possibleErrorsRules = require('./rules/possible-errors.js');
const stylisticRules = require('./rules/stylistic.js');
const variablesRules = require('./rules/variables.js');

/**
 * @type {import("eslint").Linter.Config[]}
 *
 * This is the base for both our browser and Node ESLint config files.
 */
module.exports = [
  jsEslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierConfig,
  bestPracticeRules,
  ...commentsConfig,
  es6Rules,
  importRules,
  possibleErrorsRules,
  stylisticRules,
  ...unicornConfig,
  variablesRules,
  {
    name: '@glasshouse/eslint-config-base',
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    // Tell ESLint not to ignore dot-files, which are ignored by default.
    ignores: ['!.*.js'],
    settings: {
      // Use the Node resolver by default.
      'import/resolver': { node: {} },
    },
    languageOptions: {
      globals: {
        ...globals[`es${ECMA_VERSION}`],
      },
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        sourceType: 'module',
      },
    },
  },
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
  {
    files: [
      '*.config.cjs',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      '**/*.d.ts',
      '**/*.stories.ts',
      '**/*.stories.tsx',
      'app/**/*error.tsx',
      'app/**/layout.tsx',
      'app/**/not-found.tsx',
      'app/**/opengraph-image.tsx',
      'app/**/page.tsx',
      'app/apple-icon.tsx',
      'app/robots.ts',
      'app/sitemap.ts',
      'next.config.mjs',
      'src/app/**/*error.tsx',
      'src/app/**/layout.tsx',
      'src/app/**/not-found.tsx',
      'src/app/**/opengraph-image.tsx',
      'src/app/**/page.tsx',
      'src/app/apple-icon.tsx',
      'src/app/robots.ts',
      'src/app/sitemap.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': ['error', { target: 'any' }],
      'import/no-cycle': 'off', // This rule is the most taxing on performance
    },
  },
];
