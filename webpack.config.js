const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
})
const VendorChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'dist/vendor.js',
  minChunks: function(module){
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
})
module.exports = {
  entry: {
    'dist/bundle': './src/index.js'
  },
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env']
        },
      }
    ]
  },
  performance: {
    // hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000
  },
  plugins: [HTMLWebpackPluginConfig, VendorChunkPluginConfig],
  devServer: {
    watchOptions: {
      poll: true
    }
  }
};
