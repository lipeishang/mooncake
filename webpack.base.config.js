'use strict';
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let env = "dev";
let isProd = false;
let prodPlugins = [];

// 生产环境添加压缩插件
if (process.env.NODE_ENV === "production") {
  env = "prod";
  isProd = true;
  prodPlugins = [
    new UglifyJsPlugin({ sourceMap: true })
  ];
}

const baseWebpackConfig = {
  devtool: isProd ? "#source-map" : "#cheap-module-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
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
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": require("./" + env + ".env")
    }),
    ...prodPlugins
  ]
}

module.exports = baseWebpackConfig;
