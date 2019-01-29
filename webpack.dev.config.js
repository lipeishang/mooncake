const webpack = require('webpack');

// 读取同一目录下的 base config
const config = require('./webpack.base.config');
const path = require('path');

config.mode = 'development';

config.devServer = {
  contentBase: path.join(__dirname, 'public'),
  hot: true,
  port: 3000,
  publicPath: '/dist'
};


config.module.rules.push(
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader'
    ],
    exclude: /node_modules/
  }
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;