const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require('./webpack.base.config');
const merge = require("webpack-merge");
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const clientEntry = path.resolve(__dirname, './app/view/index.js');
const WEB_PATH = path.resolve(__dirname, 'dist/');

const clientConfig = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  entry: clientEntry,
  output: {
    publicPath: '/',
    path: WEB_PATH,
    filename: '[name].index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/view/index.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    hot: true,
    port: 3000
  }
});

module.exports = clientConfig;


