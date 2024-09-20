import eslint from '@eslint/js'
import globals from 'globals'
import gitignore from 'eslint-config-flat-gitignore'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import tsEslint from 'typescript-eslint'

export default [
  gitignore(),
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts,astro}'],
    rules: {
      'no-undef': 'off',
    },
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        dataLayer: false,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]
