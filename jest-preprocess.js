const babelOptions = {
  presets: ["@babel/preset-react", "babel-preset-gatsby", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-regenerator"
  ]
};
module.exports = require("babel-jest").createTransformer(babelOptions);
