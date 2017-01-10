/* eslint-disable no-var */
var path = require('path');
var assign = require('lodash').assign;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = assign({}, {
  debug: true,
  entry: {
    vendor: ['mobx', 'angular', 'angular-ui-router', 'flux', 'lodash'],
    app: ['webpack-hot-middleware/client', path.join(__dirname, 'src', 'app', 'app.js')]
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Angular',
      template: 'src/public/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body,
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader',
          'less-loader'
        )
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ],
  },
  devServer: {
    contentBase: './src/public',
    stats: 'minimal'
  },
  target: 'web'
});

module.exports = config;