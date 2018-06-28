const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.WEBPACK_SERVE === true

module.exports = {
  mode: isDev ? 'development' : 'production',
  hot: true,

  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/bundle.js',
    publicPath: '/nonograms'
  },

  devtool: 'source-map',
  devServer: {
    historyApiFallback: { index: '/nonograms' }
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } }
          ]
        })
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.jsx', '.ts', '.js' ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('static/styles.css'),
    new HtmlWebpackPlugin({
      title: 'J4RV Nonograms',
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'public/static/*.css', to: 'static/[name].css'},
      {from: 'public/404.html'}
    ])
  ]
}
