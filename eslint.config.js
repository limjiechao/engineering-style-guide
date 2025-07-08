const node = require('./eslint/node');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...node,
  {
    files: ['eslint/rules/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
  {
    files: ['eslint/**/*.js', '*.config.js'],
    rules: {
      // 'import/order': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    files: ['.*.js', '.*.cjs', '.*.mjs'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '**/*.d.ts'],
  },
];
