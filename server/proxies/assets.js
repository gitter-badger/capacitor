var url = require('url');

module.exports = {
  path: '/assets/{p*}',
  method: 'GET',
  handler: {
    proxy: {
      mapUri: function (request, callback) {
        return callback(null, url.resolve(process.env.ASSETS_HOST, request.raw.req.url));
      },
      passThrough: true
    }
  }
}
