var Express = require('express');
var webpack = require('webpack');
var path = require('path');

var webpackConfig = require('./webpack.dev.config');
var compiler = webpack(webpackConfig);

var host = 'localhost';
var port = 5001;
var serverOptions = {
  contentBase: './dist/',
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});