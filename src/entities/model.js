const { Model } = require('objection')
const knex = require('./knex')

Model.knex(knex)

class BaseModel extends Model {
  $beforeInsert () {
    this.created_at = this.updated_at = new Date().toISOString()
    this.deleted = false
  }
  $beforeUpdate () {
    this.updated_at = new Date().toISOString()
  }
}

module.exports = BaseModel
