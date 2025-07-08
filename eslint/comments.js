// Configs
const commentsConfigs = require('@eslint-community/eslint-plugin-eslint-comments/configs');
// Rules
const commentsRules = require('./rules/comments');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [commentsConfigs.recommended, commentsRules];
