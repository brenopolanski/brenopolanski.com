import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sortKeysCustomOrderFix from 'eslint-plugin-sort-keys-custom-order-fix'
import unusedImports from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: ['src/styles/**', 'src/components/ui/**'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys-custom-order-fix': sortKeysCustomOrderFix,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: ['I'],
          selector: 'interface',
        },
        {
          format: ['PascalCase'],
          prefix: ['T'],
          selector: 'typeAlias',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-import-type-side-effects': ['error'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-unused-vars': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-keys-custom-order-fix/sort-keys-custom-order-fix': [
        'error',
        'custom',
        {
          caseSensitive: true,
          natural: true,
          order: ['id', 'title', 'description'],
          orderBy: 'asc',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ],
    },
  },
]

export default eslintConfig
