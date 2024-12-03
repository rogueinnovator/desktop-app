const { default: merge } = require("webpack-merge");
const mainconfig = require("./webpack.main.config");
const rendrerConfig = require("./webpack.rendrer.config");
module.exports = [mainconfig, rendrerConfig];
