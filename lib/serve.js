require('colors');
require('node-env-file')('.env');

var Server  = require("webpack-dev-server");
var Webpack = require("webpack");
var config  = require('../webpack.config');
var url     = require('url');
var address = url.format({ hostname: 'localhost', protocol: 'http', port: process.env.PORT })

config.entry = [
  'webpack/hot/dev-server',
  "webpack-dev-server/client?" + address
].concat(config.entry);

config.plugins = [
  new Webpack.HotModuleReplacementPlugin()
].concat(config.plugins);

var compiler = Webpack(config);

var server = new Server(compiler, {
  contentBase: config.output.path,
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
  watchDelay: 300
});

server.listen(process.env.PORT, 'localhost', function() {
  console.log("Capacitor is fluxing at %s", address.green);
});
