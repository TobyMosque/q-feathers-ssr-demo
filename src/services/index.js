const loginService = require('./login')
const signupService = require('./signup')
const loginHooks = require('./hooks/login')
const signupHooks = require('./hooks/signup')
const errorHooks = require('./hooks/error')

module.exports = function (app) {
  app.use('/api/login', loginService).hooks(loginHooks)
  app.use('/api/signup', signupService).hooks(signupHooks)
  app.hooks(errorHooks)
}
