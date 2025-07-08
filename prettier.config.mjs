/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
};

/** @type {import('prettier').Config} */
const config = {
  ...overridableDefaults,
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'always',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tailwindFunctions: ['clsx', 'cn'],
  trailingComma: 'es5',
};

export default config;
