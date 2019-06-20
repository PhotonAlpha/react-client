const path = require('path')
const merge = require('webpack-merge')

const commonConfig = require('./webpack.common.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ]
  },
  watch: true,
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    // proxy: {
    //   "/api/*": "http://localhost:3000"
    // }
  }
}

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig)
