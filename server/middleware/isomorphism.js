console.log('Installing node-jsx ...')

require('node-jsx').install({
  extension : '.js',
  harmony   : true
})

var Router = require('react-router')
var routes = require('../../shared/router')

module.exports = function (req, res, next) {

  Router.renderRoutesToString(routes, req.url, function(error, abortReason, html) {
    if (error) {
      res.error(error, abortReason)
    }

    res.render('application.html', { app: html })
  })

}
