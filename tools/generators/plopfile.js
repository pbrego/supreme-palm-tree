const component = require('./component');
const feature = require('./feature');

module.exports = (plop) => {
  plop.setGenerator(component.name, component.options);
  plop.setGenerator(feature.name, feature.options);
};
