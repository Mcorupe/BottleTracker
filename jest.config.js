module.exports = {
  verbose: true,
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': `./jest-preprocess.js` },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `./__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`], //public
  transformIgnorePatterns: [`/node_modules/(?!gatsby)`, `/node_modules/(?!gatsby-plugin-firebase)`],
  globals: { __PATH_PREFIX__: ``, },
  testURL: `http://localhost`,
  setupFiles: [`./loadershim.js`],
  setupFilesAfterEnv: [`./jest.setup.js`],
  coverageReporters: ["lcov", "text", "html"]
}

//https://jestjs.io/docs/en/tutorial-react#custom-transformers scroll to bottom