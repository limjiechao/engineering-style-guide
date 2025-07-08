// Plugins
const vitestPlugin = require('@vitest/eslint-plugin');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ['tests/**'], // or any other pattern
    plugins: {
      vitest: vitestPlugin,
    },
    rules: vitestPlugin.configs.recommended.rules,
  },
];
