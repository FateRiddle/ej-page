const path = require('path')
const webpack = require('webpack')
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  // context: __dirname + "/app",
  entry: {
    liangfang: "./src/js/liangfang.js",
    taocan: "./src/js/taocan.js",
    popup: "./src/js/popup/index.js",
  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src")
        ],

        // the "loader"
        loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
      },
      {
        test: /\.css$/,
        use:["style-loader","css-loader"],
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
              publicPath: "/js",   //what is this for? you don't need it in html
              name: '[name]--[hash:base64:5].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CommonsChunkPlugin("commons"),//output will be commons.js
  ]
}
