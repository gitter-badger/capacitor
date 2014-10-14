require('node-env-file')('.env')

require('node-jsx').install({
  extension : '.js',
  harmony   : true
})

var path    = require('path')
var http    = require('http')
var express = require('express')
var app     = express()

global.__DEV__  = process.env.NODE_ENV === 'development'
global.__ROOT__ = path.resolve(__dirname, '..')

require('./config')(app)
require('./middleware/webpack')(app)
require('./middleware/static')(app)
require('./middleware/isomorphism')(app)

http.createServer(app).listen(process.env.PORT, function() {
  console.log("Capacitor is listening on port %s", process.env.PORT)
})
