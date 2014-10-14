var Router = require('react-router')
var routes = require('../../shared/router')

module.exports = function(app) {

  app.use(function(req, res, next) {

    Router.renderRoutesToString(routes, req.url, function(error, abortReason, html) {
      if (error) {
        res.error(error, abortReason)
      }

      res.render('application', { app: html })
    })

  })

}
