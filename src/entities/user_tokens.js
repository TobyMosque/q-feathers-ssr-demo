const Model = require('./model')
const Users = require('./users')

class UserTokens extends Model {
  static get tableName () {
    return 'tokens'
  }
  static get idColumn () {
    return 'token_id'
  }
  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: 'users_roles.user_id',
          to: 'users.user_id'
        }
      }
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['token_id', 'user_id', 'deleted', 'created_at', 'updated_at'],
      properties: {
        token_id: { type: 'string' },
        user_id: { type: 'string' },
        deleted: { type: 'boolean' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    }
  }
}

module.exports = UserTokens
