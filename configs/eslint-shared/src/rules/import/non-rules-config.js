module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx'], paths: ['./src'] },
      typescript: {
        project: 'packages/**/tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: 'plugin:import/typescript',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
};
