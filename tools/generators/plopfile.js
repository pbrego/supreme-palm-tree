const component = require('./component');
const library = require('./library');

module.exports = (plop) => {
  plop.setGenerator(component.name, component.options);
  plop.setGenerator(library.name, library.options);
};
