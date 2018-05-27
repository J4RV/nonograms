const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.WEBPACK_SERVE === true

module.exports = {
  mode: isDev ? 'development' : 'production',

  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.jsx', '.ts', '.js' ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin(['/public/*.css'], {}),
    new HtmlWebpackPlugin({
      title: 'J4RV Nonograms',
      template: 'public/index.html'
    })
  ]
}
