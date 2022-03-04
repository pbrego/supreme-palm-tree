module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-regex': [
      'off',
      // support all cases and suffixes that current project has:
      // \\.?[a-z0-9-]*[A-Za-z0-9]+\\.?(config|hook|hooks|props|styles|test|types|actions|reducer|model|utils|setup)?\\.?(d)?$'
      '^\\.?([a-z]+(?:[A-Z][a-z]+)*)*([A-Z][a-z]+(?:[A-Z][a-z]+)*)*\\.?(config|types|setup)?\\.?(d)?$',
      true,
    ],
    'filenames/match-exported': ['off', ['camel', 'pascal'], '\\.(config|types|setup)$', true],
    'filenames/no-index': 'off',
  },
};
