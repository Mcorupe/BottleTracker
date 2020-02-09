module.exports = {
  verbose: true,
  transform: { "^.+\\.(ts|tsx|js|jsx)?$": `./jest-preprocess.js` },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`], //public
  transformIgnorePatterns: [
    `/node_modules/(?!gatsby)`,
    `/node_modules/(?!gatsby-plugin-firebase)`
  ],
  globals: { __PATH_PREFIX__: `` },
  testURL: `http://localhost`,
  setupFiles: [`./loadershim.js`],
  setupFilesAfterEnv: [`./jest.setup.js`],
  coverageReporters: ["lcov", "text", "html"]
};

//https://jestjs.io/docs/en/tutorial-react#custom-transformers scroll to bottom
