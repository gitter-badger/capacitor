require('colors')
require('node-env-file')('.env')

var project = require('../package')
var path    = require('path')
var url     = require('url')
var express = require('express')
var swig    = require('swig')
var www     = path.resolve(process.cwd(), 'public')
var app     = express()

// Views
app.engine('html', swig.renderFile)
   .set('views', www)

app.locals.assets_url = url.format({
  hostname: 'localhost',
  pathname: 'assets',
  protocol: 'http',
  port: process.env.WEBPACK_PORT
})

// Middleware
app.use('./assets', express.static(www))
   .use(require('./react'))

// Run Webpack Dev Server in tandem
var webpack = require('./webpack')

app.listen(process.env.PORT, function() {
  console.log("\n%s is listening on port %s (%s)", project.name.green, process.env.PORT.toString().blue, process.env.NODE_ENV.magenta)
})

webpack.listen(process.env.WEBPACK_PORT, function() {
  console.log("%s is listening on port %s (%s)\n", 'Webpack'.green, process.env.WEBPACK_PORT.toString().blue, process.env.NODE_ENV.magenta)
})
