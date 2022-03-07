// const rules = require('./src/rules/index.js').default;

module.exports = {
  extends: ['./src/rules/index.js'],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
  },
};
