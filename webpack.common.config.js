const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  entry: {
    app: [
      path.join(__dirname, 'src/index.js'),
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      mock: path.join(__dirname, 'mock'),
      comp: path.join(__dirname, 'src/components'),
      container: path.join(__dirname, 'src/containers'),
      act: path.join(__dirname, 'src/redux/actions'),
      asset: path.join(__dirname, 'public/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'public')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      // reference: https://github.com/postcss/postcss/blob/master/README-cn.md
      {
        test: /\.(sc|c)ss$/,
        use: [{
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv(/* pluginOptions */)
            ]
          }
        }]
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "static/imgs/[name]-[hash:8].[ext]",
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:5].css",
      chunkFilename: "static/css/[name].[contenthash:5].css"
    })
  ],
  optimization: {
    chunkIds: 'named',
    moduleIds: 'hashed',
    splitChunks: {
      minSize: 30000,
      maxSize: 0,
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          filename: 'static/js/[name].bundle.js',
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      } 
    }
  }
}
