const Model = require('./model')
const UsersRoles = require('./users_roles')

class Roles extends Model {
  static get tableName () {
    return 'roles'
  }
  static get idColumn () {
    return 'role_id'
  }
  static get relationMappings () {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: UsersRoles,
        join: {
          from: 'roles.role_id',
          to: 'users_roles.role_id'
        }
      }
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['role_id', 'name'],
      properties: {
        role_id: { type: 'string' },
        name: { type: 'string' },
        deleted: { type: 'boolean' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    }
  }
}

module.exports = Roles
