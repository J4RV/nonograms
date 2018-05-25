const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.WEBPACK_SERVE === true

module.exports = {
  mode: isDev ? 'development' : 'production',

  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  watch: isDev,

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.jsx', '.ts', '.js' ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Template',
      template: 'public/index.html'
    })
  ]
}
