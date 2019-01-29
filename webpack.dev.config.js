const webpack = require('webpack');

// 读取同一目录下的 base config
const config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

config.mode = 'development';

config.devServer = {
  contentBase: path.join(__dirname,'public'),
  hot: true,
  port: 3000,
  publicPath: "http://localhost:3000/dist"
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

config.externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

config.plugins.push(
  new HtmlWebpackPlugin({
    template: './public/index.html'
  })
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;