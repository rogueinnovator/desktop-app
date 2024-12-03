// webpack.main.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main/index.js",
  target: "electron-main",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
