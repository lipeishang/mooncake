const webpack = require('webpack');

// 读取同一目录下的 base config
const { web, node } = require('./webpack.base.config');

const path = require('path');

web.mode = 'development';
web.plugins.push(new webpack.HotModuleReplacementPlugin());
web.devServer = {
  contentBase: path.join(__dirname, 'app/view'),
  hot: true,
  port: 3000,
  publicPath: '/dist'
};
web.module.rules.push(
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

module.exports = [web, node];