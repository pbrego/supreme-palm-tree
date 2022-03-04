module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    React: 'writable',
  },
  rules: {
    'react/no-unknown-property': 'off',
    'react/display-name': 'error',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
};
