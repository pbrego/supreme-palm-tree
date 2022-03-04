const fs = require('fs');

const libs = fs.readdirSync("../../libs", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

module.exports = {
    name: "component",
    options: {
        description: 'UI component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name'
        },{
            type: "list",
            name: 'package',
            message: 'component package',
            choices: libs,
        }],
        actions: [{
            type: 'add',
            path: '../../libs/{{package}}/src/components/{{kebabCase name}}/index.ts',
            templateFile: 'component/templates/web/components/component/index.ts.hbs'
        },{
            type: 'add',
            path: '../../libs/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
            templateFile: 'component/templates/web/components/component/component.tsx.hbs'
        },{
            type: 'add',
            path: '../../libs/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
            templateFile: 'component/templates/web/components/component/component.test.tsx.hbs'
        },{
            type: 'add',
            path: '../../libs/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.types.ts',
            templateFile: 'component/templates/web/components/component/component.types.ts.hbs'
        },{
            type: 'add',
            path: '../../libs/{{package}}/src/components/{{kebabCase name}}/{{kebabCase name}}.less',
            templateFile: 'component/templates/web/components/component/component.less.hbs'
        },{
            type: "add",
            path: "../../libs/{{package}}/src/components/index.ts",
            templateFile: "component/templates/web/components/index.ts.hbs",
            skipIfExists: true,
        },{
            type: "append",
            path: "../../libs/{{package}}/src/components/index.ts",
            pattern: "/* PLOP_INJECT_INDEX_IMPORT */",
            template: `export { {{pascalCase name}} } from "./{{kebabCase name}}";`,
        },{
            type: "add",
            path: "../../libs/{{package}}/src/styles/index.less",
            templateFile: "component/templates/web/styles/index.less.hbs",
            skipIfExists: true,
        },
        {
            type: "append",
            path: "../../libs/{{package}}/src/styles/index.less",
            pattern: "/* PLOP_INJECT_STYLE_IMPORT */",
            template: `@import "../components/{{pascalCase name}}/{{kebabCase name}}.style";`,
        }],
    }
}
