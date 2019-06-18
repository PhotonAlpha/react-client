const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = require('./webpack.common.config.js')

const publicConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
       }
    }),
  ]
}

module.exports = merge(commonConfig, publicConfig)
