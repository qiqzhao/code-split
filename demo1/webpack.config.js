const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // webpack 命名方式，[name]以文件名自己命名
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: 'development'
};
