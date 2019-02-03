const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entry = path.resolve(__dirname, 'app/view/index.js');

const serverConfig = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "server.js",
    libraryTarget: "commonjs2"  // 打包成commonjs2规范
  },
  target: "node",  // 指定node运行环境
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_ENV": JSON.stringify("server")  // 指定React环境为服务端
    })
  ]
});

module.exports = serverConfig;