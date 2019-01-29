'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548767414962_1929';

  exports.reactssr = {
    layout: path.join(appInfo.baseDir, 'app/view/index.html')
  };
  // add your config here
  config.middleware = [];

  return config;
};
