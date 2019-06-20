const webpack = require('webpack')
const merge = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const commonConfig = require('./webpack.common.config.js')

const publicConfig = {
  mode: 'production',
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
  ],
  optimization: {
    minimizer: [
      // 优化压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}

module.exports = merge(publicConfig, commonConfig)
