const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = require('./webpack.common.config.js')

const publicConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), 'dist')] }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
  ]
}

module.exports = merge(commonConfig, publicConfig)
