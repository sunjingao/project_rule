'use strict';
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.css', 'json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'static': path.resolve(__dirname, './static')
    }
  }
};
