
const utils = require('../../utils')

exports.seed = async function (knex, Promise) {
  let isoDate = void 0
  await knex('roles').del()
  isoDate = new Date().toISOString()
  await knex('roles').insert([
    { role_id: utils.comb(), name: 'user', deleted: false, created_at: isoDate, updated_at: isoDate }
  ])
  await utils.sleep(10)
  isoDate = new Date().toISOString()
  await knex('roles').insert([
    { role_id: utils.comb(), name: 'admin', deleted: false, created_at: isoDate, updated_at: isoDate }
  ])
}
