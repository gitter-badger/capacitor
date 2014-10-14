var express = require('express')
var swig    = require('swig')
var path    = require('path')

swig.setDefaults({
  autoescape: false
})

module.exports = function(app) {
  app.engine('html', swig.renderFile)

  app.set('view engine', 'html')
  app.set('views', path.join(__ROOT__, 'public'))
}
