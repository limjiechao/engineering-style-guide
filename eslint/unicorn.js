// Plugins
const unicornPlugin = require('eslint-plugin-unicorn');
// Rules
const unicornRules = require('./rules/unicorn');

/** @type {import('eslint').Linter.Config} */
module.exports = [unicornPlugin.default.configs.all, { ...unicornRules }];
