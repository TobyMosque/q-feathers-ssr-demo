const service = require('./service')
const hooks = require('./hooks')

module.exports = function (app) {
  app.use('api/signup', service).service('api/signup').hooks(hooks)
}
