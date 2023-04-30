module.exports = {
  plugins: ['stylelint-scss', 'stylelint-declaration-block-no-ignored-properties'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-html',
    'stylelint-config-prettier',
  ],
  rules: {
    'keyframes-name-pattern': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'for',
          'each',
          'include',
          'mixin',
          'import',
          'custom-media',
          'use',
          'forward',
          'return',
        ],
      },
    ],
  },
  ignoreFiles: ['dist/**', 'node_modules/**'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
}
