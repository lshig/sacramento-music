var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/app/scripts/js');
var APP_DIR = path.resolve(__dirname, 'src/client/app/scripts/jsx');
var config = {
  entry: {
    index: APP_DIR + '/app.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};
module.exports = config;
