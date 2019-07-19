// const Roles = require('../../entities/roles')
const UsersRoles = require('../../entities/users_roles')
const Users = require('../../entities/users')
const utils = require('../../utils')
const { BadRequest } = require('@feathersjs/errors')

const LoginService = {
  async create (data, params) {
    let user = await Users.query().where({ user_name: data.username }).column(['user_id', 'name', 'password', 'salt']).first()
    if (!user) {
      return BadRequest('Invalid Parameters', { errors: { password: 'password incorrect or user not found' } })
    }
    let password = await utils.scrypt(data.password, user.salt, 64)
    let correct = password.compare(user.password) === 0
    console.log(correct)
    if (!correct) {
      return BadRequest('Invalid Parameters', { errors: { password: 'password incorrect or user not found' } })
    }
    let roles = await UsersRoles.query()
      .joinRelation('role')
      .where({ user_id: user.user_id })
      .column({ name: 'role.name' })
      .select()
    console.log(roles)
    let jti = utils.comb()
    let token = await utils.signJwt({
      jti: jti,
      sub: user.user_id,
      name: user.name,
      roles: roles.map(role => role.name)
    })
    console.log(token)
    return token
  }
}

LoginService.docs = {
  description: 'Log In',
  definition: {
    type: 'object',
    required: [ 'username', 'password' ],
    properties: {
      username: { type: 'string', description: 'User Name' },
      password: { type: 'string', description: 'Password' }
    }
  }
}

module.exports = LoginService
