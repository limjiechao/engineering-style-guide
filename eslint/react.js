// Plugins
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const reactCompilerPlugin = require('eslint-plugin-react-compiler');
// Configs
const prettierConfig = require('eslint-config-prettier');
// Rules
const jsxA11yRules = require('./rules/jsx-a11y');
const reactRules = require('./rules/react');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  importPlugin.flatConfigs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  prettierConfig,
  {
    name: '@glasshouse/eslint-config-react',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooksPlugin,
      'react-compiler': reactCompilerPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactRules.rules,
      ...jsxA11yRules.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
