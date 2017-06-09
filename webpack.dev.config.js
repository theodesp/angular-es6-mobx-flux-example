/* eslint-disable no-var */
var path = require('path');
var assign = require('lodash').assign;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = assign({}, {
  entry: {
    vendor: ['mobx', 'angular', '@uirouter/angularjs', 'flux', 'lodash', 'angular-loading-bar'],
    app: ['webpack-hot-middleware/client', path.join(__dirname, 'src', 'app', 'app.js')]
  },
  devtool: 'cheap-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Angular',
      template: 'src/public/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: Infinity
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: 'ng-annotate-loader',
            options: { es6: true, explicitOnly: false },
          },
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
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