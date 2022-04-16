module.exports = {
  name: 'library',
  options: {
    description: 'library',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'library name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/src/index.ts',
        templateFile: 'library/templates/src/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/.eslintignore',
        templateFile: 'library/templates/.eslintignore.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/.eslintrc.js',
        templateFile: 'library/templates/.eslintrc.js.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/index.ts',
        templateFile: 'library/templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/jest.config.ts',
        templateFile: 'library/templates/jest.config.ts.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/jest.setup.ts',
        templateFile: 'library/templates/jest.setup.ts.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/package.json',
        templateFile: 'library/templates/package.json.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/README.md',
        templateFile: 'library/templates/README.md.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/tsconfig.build.json',
        templateFile: 'library/templates/tsconfig.build.json.hbs',
      },
      {
        type: 'add',
        path: '../../libs/{{kebabCase name}}/tsconfig.json',
        templateFile: 'library/templates/tsconfig.json.hbs',
      },
    ],
  },
};
