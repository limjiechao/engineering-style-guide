// Configs
const tsEslint = require('typescript-eslint');
// Configs
const prettierConfig = require('eslint-config-prettier');
// Plugins
const importPlugin = require('eslint-plugin-import');
// Constants
const { TYPESCRIPT_FILES } = require('./_constants');
// Rules
const typescriptRules = require('./rules/typescript');
const typescriptExtensionRules = require('./rules/typescript/extension');
const typescriptImportRules = require('./rules/typescript/import');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettierConfig,
  {
    files: TYPESCRIPT_FILES,
  },
  typescriptRules,
  typescriptExtensionRules,
  typescriptImportRules,
];
