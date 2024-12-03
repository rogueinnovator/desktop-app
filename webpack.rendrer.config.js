// webpack.renderer.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app/src/index.js",
  target: "electron-renderer",
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
