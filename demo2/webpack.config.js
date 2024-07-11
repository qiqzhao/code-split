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
  optimization: {
    // 代码分割
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      // 默认值
      // minSize: 20000,  // 分割代码最小的大小
      // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
      // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
      // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequests: 30, // 入口js文件最大并行请求数量
      // enforceSizeThreshold: 50000,  // 超过50kb一定单独打包（此时忽略minRemainingSize，maxAsyncRequests，maxInitialRequests）
      // cacheGroups: { // 组，哪些模块要打包到一个组
      //   defaultVendors: { // 组名
      //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
      //     priority: -10, // 权重，越大越高
      //     reuseExistingChunk: true, // 如果当前chunk包含已从主bundle中拆分出的模块，则听讲被重用，而不是生成新模块
      //   },
      //   default: { // 其他没有写的配置会使用上面的默认值
      //     minChunks: 2, // 权重更大
      //     priority: -20, //
      //     reuseExistingChunk: true, //
      //   }
      // },
      cacheGroups: {
        default: {
          minSize: 0,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: "production",
};
