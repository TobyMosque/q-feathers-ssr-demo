const { client, connection } = require('./knexfile')
const Knex = require('knex')
const knex = Knex({
  client,
  connection,
  useNullAsDefault: false
})

module.exports = knex
