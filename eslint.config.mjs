import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Config} */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([
    '.next/**',
    '.source/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/src/components/ui/**',
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      curly: 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandLast: true,
        },
      ],
      'react/no-unknown-property': ['error', { ignore: ['global', 'jsx'] }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.config.mjs'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
    },
  },
])

export default eslintConfig
