module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'no-inner-declarations': 'off',
    'class-methods-use-this': 'off',
  },

  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      rules: {
        'no-restricted-imports': [
          'warn',
          {
            paths: [
              {
                name: 'antd/es',
                message:
                  'Please avoid antd/es imports, instead use antd/lib to avoid transpilation problems with jest.',
              },
            ],
          },
        ],
      },
    },
  ],
};
