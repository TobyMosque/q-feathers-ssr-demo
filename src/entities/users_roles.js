const Model = require('./model')
const Users = require('./users')
const Roles = require('./roles')

class UsersRoles extends Model {
  static get tableName () {
    return 'users_roles'
  }
  static get idColumn () {
    return 'user_role_id'
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
      },
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Roles,
        join: {
          from: 'users_roles.role_id',
          to: 'roles.role_id'
        }
      }
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['user_role_id', 'user_id', 'role_id'],
      properties: {
        user_role_id: { type: 'string' },
        user_id: { type: 'string' },
        role_id: { type: 'string' },
        deleted: { type: 'boolean' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    }
  }
}

module.exports = UsersRoles
