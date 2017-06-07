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
  filename: 'dest/vendor.js',
  minChunks: function(module){
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
})
module.exports = {
  entry: {
    'dest/bundle': './src/index.jsx'
  },
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  devtool: 'source-map',
  performance: {
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
