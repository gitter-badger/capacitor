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

app.locals.assets_host = process.env.ASSETS_HOST

// Middleware
app.use('./assets', express.static(www))
   .use(require('./react'))

app.listen(process.env.PORT, function() {
  console.log("\n%s is listening on port %s (%s)", project.name.green, process.env.PORT.toString().blue, process.env.NODE_ENV.magenta)
})

// Run Webpack Dev Server in tandem
if (app.get('env') === 'development') {
  var webpack      = require('./webpack')
  var webpack_port = url.parse(process.env.ASSETS_HOST).port

  webpack.listen(webpack_port, function() {
    console.log("%s is listening on port %s (%s)\n", 'Webpack'.green, webpack_port.toString().blue, process.env.NODE_ENV.magenta)
  })
}
