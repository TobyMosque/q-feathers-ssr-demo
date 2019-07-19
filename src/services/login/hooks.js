const Errors = require('@feathersjs/errors')

const LoginHooks = {
  before: {
    async create (context) {
      let signup = context.data
      let required = ['username', 'password'].reduce((errors, key) => {
        if (!signup[key]) {
          errors[key] = `${key} is required`
        }
        return errors
      }, {})
      if (Object.keys(required).length > 0) {
        throw new Errors.BadRequest('Invalid Parameters', { errors: required })
      }
      return context
    }
  }
}

module.exports = LoginHooks
