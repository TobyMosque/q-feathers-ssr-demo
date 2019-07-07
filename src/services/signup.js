const knex = require('../entities/knex')
const Roles = require('../entities/roles')
const UsersRoles = require('../entities/users_roles')
const Users = require('../entities/users')
const required = [ 'name', 'username', 'password', 'confirm' ]
const crypto = require('crypto')
const utils = require('../utils')
const { transaction } = require('objection')

const promisify = (method, ...args) => {
  return new Promise((resolve, reject) => {
    args.push((err, buf) => {
      if (err) reject(err)
      resolve(buf)
    })
    crypto[method].apply(crypto, args)
  })
}

const SignupService = {
  async create (signup, params) {
    let salt = await promisify('randomBytes', 16)
    let pass = await promisify('scrypt', signup.password, salt, 64)
    let role = await Roles.query().where({ name: 'user' }).first()
    await transaction(knex, async (trx) => {
      let userId = utils.comb()
      let roleId = utils.comb()
      let _user = {
        user_id: userId,
        name: signup.name,
        user_name: signup.username,
        password: Uint8Array.from(pass),
        salt: Uint8Array.from(salt)
      }
      let _role = {
        user_role_id: roleId,
        user_id: userId,
        role_id: role.role_id
      }
      await Users.query(trx).insert(_user)
      await UsersRoles.query(trx).insert(_role)
    }).catch(error => {
      throw error
    })
    return { success: true }
  }
}

SignupService.docs = {
  description: 'Sign Up',
  definitions: {
    signup: {
      type: 'object',
      required: required,
      properties: {
        name: { type: 'string', description: 'Name' },
        username: { type: 'string', description: 'User Name' },
        password: { type: 'string', description: 'Password' },
        confirm: { type: 'string', description: 'Confirm Password' }
      }
    }
  }
}

module.exports = SignupService
