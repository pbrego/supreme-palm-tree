module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        argsIgnorePattern: 'req|res|next|val',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
};
