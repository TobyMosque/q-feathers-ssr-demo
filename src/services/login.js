const Roles = require('../entities/roles')

const LoginService = {
  async get (id, params) {
    let roles = await Roles.query().where({ deleted: false })
    return roles
  },
  async create (login, params) {
    return []
  }
}

LoginService.docs = {
  description: 'Log In',
  definitions: {
    login: {
      type: 'object',
      required: [ 'username', 'password' ],
      properties: {
        username: { type: 'string', description: 'User Name' },
        password: { type: 'string', description: 'Password' }
      }
    }
  }
}

module.exports = LoginService
