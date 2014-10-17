var Router  = require('react-router')

// Enable server-side JSX compilation
require('node-jsx').install({
  extension : '.js',
  harmony   : true
})

var routes = require('../../app/router')

module.exports = function(request, response, next) {

  var render = function(error, abortReason, reactMarkup) {
    error && response.error(error, abortReason)
    // Renders react markup to public/application.html with express + swig
    response.render('application.html', { app: reactMarkup })
  }

  // React Router's isomorphic magic
  Router.renderRoutesToString(routes, request.url, render)

}
