module.exports = {
  plugins: ['no-loops'],
  extends: ['./non-rules-config.js', 'plugin:prettier/recommended'],
  rules: {
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-loops/no-loops': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/naming-convention': [
          'off',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'allowSingleOrDouble',
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            suffix: ['Type'],
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
            suffix: ['Type', 'Model', 'Props'],
            custom: {
              regex: '^(I|E)[A-Z]',
              match: false,
            },
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            suffix: ['Enum'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
          {
            selector: [
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod',
              'accessor',
              'enumMember',
            ],
            format: null,
            modifiers: ['requiresQuotes'],
          },
        ],
      },
    },
  ],
};
