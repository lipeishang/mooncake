'use strict';
const path = require('path');
const webpack = require('webpack');
const BUILD_PATH = path.resolve(__dirname, 'dist/node/');
const WEB_PATH = path.resolve(__dirname, 'dist/app/');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = path.resolve(__dirname, 'app/view/index.js');

module.exports.node = {
  target: 'node',
  entry: entry,
  output: {
    publicPath: '/',
    path: BUILD_PATH,
    filename: '[name].index.js',
    libraryTarget: 'commonjs',
  },
  module: {},
  plugins: [],
  optimization: {},
  stats: 'errors-only',
};

module.exports.web = {
  entry: entry,
  output: {
    publicPath: '/',
    path: WEB_PATH,
    filename: '[name].index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // 建议把 babel 的运行时配置放在 .babelrc 里，从而与 eslint-loader 等共享配置
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use:
          [
            {
              loader: 'url-loader',
              options:
              {
                limit: 8192,
                name: 'images/[name].[ext]'
              }
            }
          ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
          [
            {
              loader: 'url-loader',
              options:
              {
                limit: 8192,
                mimetype: 'application/font-woff',
                name: 'fonts/[name].[ext]'
              }
            }
          ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
          [
            {
              loader: 'file-loader',
              options:
              {
                limit: 8192,
                mimetype: 'application/font-woff',
                name: 'fonts/[name].[ext]'
              }
            }
          ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true
    })
  ],
  optimization: {},
  stats: 'errors-only',
};