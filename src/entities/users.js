const Model = require('./model')
const UsersRoles = require('./users_roles')
const UserTokens = require('./user_tokens')

class Users extends Model {
  static get tableName () {
    return 'users'
  }
  static get idColumn () {
    return 'user_id'
  }
  static get relationMappings () {
    return {
      roles: {
        relation: Model.HasManyRelation,
        modelClass: UsersRoles,
        join: {
          from: 'persons.user_id',
          to: 'users_roles.user_id'
        }
      },
      tokens: {
        relation: Model.HasManyRelation,
        modelClass: UserTokens,
        join: {
          from: 'persons.user_id',
          to: 'user_tokens.user_id'
        }
      }
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['user_id', 'name', 'user_name', 'password', 'salt'],
      properties: {
        user_id: { type: 'string' },
        name: { type: 'string' },
        user_name: { type: 'string' },
        password: { type: 'binary' },
        salt: { type: 'binary' },
        deleted: { type: 'boolean' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    }
  }
}

module.exports = Users
