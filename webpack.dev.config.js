const webpack = require('webpack');

// 读取同一目录下的 base config
const { web, node } = require('./webpack.base.config');
const baseConfigNode = node();
const baseConfigWeb = web();

const path = require('path');

const devWebConfig = () => {
  baseConfigWeb.mode = 'development';
  baseConfigWeb.entry = path.resolve(__dirname, 'app/view');
  baseConfigWeb.plugins.push(new webpack.HotModuleReplacementPlugin());
  baseConfigWeb.devServer = {
    contentBase: path.join(__dirname, 'app/view'),
    hot: true,
    port: 3000,
    publicPath: '/dist'
  };
  baseConfigWeb.module.rules.push(
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
};

const devNodeConfig = () => {
  
}

module.exports = web;