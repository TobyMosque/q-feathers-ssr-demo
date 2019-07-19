const service = require('./service')
const hooks = require('./hooks')

module.exports = function (app) {
  app.use('api/login', service).service('api/login').hooks(hooks)
}
