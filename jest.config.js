const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx", "vue"],
  transformIgnorePatterns: ["/node_modules/(?!lib-to-transform|other-lib)"],
  preset: '@vue/cli-plugin-unit-jest'
};
