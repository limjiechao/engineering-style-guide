// Compatibility layer
const { fixupPluginRules } = require('@eslint/compat');
// Plugins
const nextPlugin = require('@next/eslint-plugin-next');
// Utils
const requirePackage = require('../utils/require-package');
// Constants
const { JAVASCRIPT_FILES } = require('./_constants');

requirePackage('next', '@next/eslint-plugin-next');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');

      return ['next/babel'];
    } catch {
      return [];
    }
  })(),
};

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    plugins: {
      '@next/next': fixupPluginRules(nextPlugin),
    },
    rules: nextPlugin.configs.recommended.rules,
  },
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parserOptions: { babelOptions },
    },
  },
];
