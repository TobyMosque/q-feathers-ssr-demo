const Users = require('../../entities/users')
const Errors = require('@feathersjs/errors')

const SignupHooks = {
  before: {
    async create (context) {
      let signup = context.data
      let required = ['name', 'username', 'password', 'confirm'].reduce((errors, key) => {
        if (!signup[key]) {
          errors[key] = `${key} is required`
        }
        return errors
      }, {})
      if (Object.keys(required).length > 0) {
        throw new Errors.BadRequest('Invalid Parameters', { errors: required })
      }
      if (signup.password !== signup.confirm) {
        throw new Errors.BadRequest('Invalid Parameters', { errors: { confirm: 'confirm must be equals to the password' } })
      }
      let userCount = await Users.query().where({ user_name: signup.username }).count()
      if (userCount > 0) {
        if (signup.password !== signup.confirm) {
          throw new Errors.BadRequest('Invalid Parameters', { errors: { username: 'username already taken' } })
        }
      }
      return context
    }
  }
}

module.exports = SignupHooks
