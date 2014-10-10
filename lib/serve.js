require('colors');
require('node-env-file')('.env');

var Server   = require("webpack-dev-server");
var Webpack  = require("webpack");
var Url      = require('url');
var Path     = require('path');
var Notifier = require('node-notifier');

var project  = require('../package');
var config   = require('../webpack.config');
var address  = Url.format({ hostname: 'localhost', protocol: 'http', port: process.env.PORT })

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
  console.log("%s is fluxing at %s", project.name, address.green);

  Notifier.notify({
    title   : project.name + ' (' + process.env.NODE_ENV + ')',
    message : address,
    icon    : Path.join(__dirname, 'assets', 'reactjs.png'),
    open    : address
  });
});
