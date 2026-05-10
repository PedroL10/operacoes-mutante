// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  mutate: ["src/**/*.js"],
  testRunner: "jest",
  jest: {
    projectType: "custom",
    configFile: "package.json",
  },
  reporters: ["progress", "clear-text", "html"],
  concurrency: 4,
  coverageAnalysis: "perTest",
};
export default config;
