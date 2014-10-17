require('node-env-file')('.env')

var project = require('../package')
var path    = require('path')
var express = require('express')
var swig    = require('swig')
var www     = path.resolve(process.cwd(), 'public')

var app     = express()

app.use(require('./middleware/webpack'))
   .use(express.static(www))
   .use(require('./middleware/isomorphism'))

app.engine('html', swig.renderFile)
   .set('views', www)

app.listen(process.env.PORT, function() {
  console.log("%s is listening on port %s (%s)", project.name, process.env.PORT, process.env.NODE_ENV)
})
