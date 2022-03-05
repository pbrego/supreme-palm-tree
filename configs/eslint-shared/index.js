// const rules = require('./src/rules/index.js').default;

module.exports = {
    extends: [
        "prettier",
        "standard"
    ],
    rules: {
        "no-use-before-define": "off",
        "no-unused-expressions": "off",
        "no-undef": "off"
    }
};
