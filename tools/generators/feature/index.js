const fs = require('fs');

const libs = fs
  .readdirSync('../../libs', { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

module.exports = {
  name: 'feature',
  options: {
    description: 'feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'feature name',
      },
      {
        type: 'list',
        name: 'package',
        message: 'feature package',
        choices: libs,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../libs/{{package}}/src/features/{{kebabCase name}}/index.ts',
        templateFile: 'feature/templates/web/features/feature/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{package}}/src/features/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'feature/templates/web/features/feature/feature.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{package}}/src/features/index.ts',
        templateFile: 'feature/templates/web/features/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: '../../libs/{{package}}/src/features/index.ts',
        pattern: '/* PLOP_INJECT_INDEX_IMPORT */',
        template: `export { {{pascalCase name}} } from "./{{kebabCase name}}";`,
      },
    ],
  },
};
