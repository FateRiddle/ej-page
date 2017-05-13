const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = (env = {}) => ({
  // context: __dirname + "/app",
  entry: {
    liangfang: "./src/ej-page/liangfang.js",
    taocan: "./src/ej-page/taocan.js",
    popup: "./src/ej-page/popup/index.js",
    houtai: "./src/ej-houtai/index.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "/assets/",  // 似乎是直接拼接上去的 两个"/"都要写
              publicPath: "/mobile/dist",
              name: '[name]--[hash:base64:5].[ext]'
            }
          }
        ]
      },
    ]
  },
  // devtool:env.production?"cheap-module-source-map":"cheap-module-eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:!env.production,
      compress:env.production?{ warnings: false }:false,
    }),
    new webpack.optimize.CommonsChunkPlugin("commons"),
    // new ExtractTextPlugin("style.css"),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
})
