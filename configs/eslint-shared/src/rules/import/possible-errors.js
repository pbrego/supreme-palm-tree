module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/no-unresolved': [
      'error',
      { ignore: ['date-fns/.*', 'antd/.*', 'recharts/.*', 'rc-picker/.*'] },
    ],
  },
};
