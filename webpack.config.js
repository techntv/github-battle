const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      { test: /\.(js)$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}