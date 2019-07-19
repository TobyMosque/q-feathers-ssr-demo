const login = require('./login')
const signup = require('./signup')
const hooks = require('./hooks')

module.exports = function (app) {
  app.configure(login)
  app.configure(signup)
  app.hooks(hooks)
}
