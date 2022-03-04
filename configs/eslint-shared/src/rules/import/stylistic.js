module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'parent', 'sibling', 'index', 'builtin'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
