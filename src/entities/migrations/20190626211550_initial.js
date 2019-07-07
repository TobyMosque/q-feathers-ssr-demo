
exports.up = async function (knex, Promise) {
  await knex.schema.createTable('users', function (table) {
    table.uuid('user_id').primary('pk_users')
    table.string('name').notNull()
    table.string('user_name').notNull().unique()
    table.binary('password', 64).notNull()
    table.binary('salt', 16).notNull()

    table.boolean('deleted').notNull().defaultTo(false)
    table.datetime('created_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))
    table.datetime('updated_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))

    table.unique('user_name', 'ixu_users_user_name')
    table.index(['deleted', 'user_id'], 'ixu_users_deleted_user_id')
  })
  await knex.raw('ALTER TABLE users CLUSTER ON ixu_users_deleted_user_id')

  await knex.schema.createTable('roles', function (table) {
    table.uuid('role_id').primary('pk_roles')
    table.string('name').notNull()

    table.boolean('deleted').notNull().defaultTo(false)
    table.datetime('created_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))
    table.datetime('updated_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))

    table.index(['deleted', 'role_id'], 'ixu_roles_deleted_role_id')
  })
  await knex.raw('ALTER TABLE roles CLUSTER ON ixu_roles_deleted_role_id')

  await knex.schema.createTable('users_roles', function (table) {
    table.uuid('user_role_id').primary('pk_users_roles')
    table.uuid('user_id').notNull().references('user_id').inTable('users').withKeyName('fk_users_users_roles')
    table.uuid('role_id').notNull().references('role_id').inTable('roles').withKeyName('fk_roles_users_roles')

    table.boolean('deleted').notNull().defaultTo(false)
    table.datetime('created_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))
    table.datetime('updated_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))

    table.unique(['user_id', 'role_id'], 'ixu_users_roles_user_id_role_id')
    table.index('role_id', 'ix_users_roles_role_id')
    table.index(['deleted', 'user_role_id'], 'ix_users_roles_deleted_user_role_id')
  })
  await knex.raw('ALTER TABLE users_roles CLUSTER ON ix_users_roles_deleted_user_role_id')

  await knex.schema.createTable('tokens', function (table) {
    table.uuid('token_id').primary('pk_tokens')
    table.uuid('user_id').notNull().references('user_id').inTable('users').withKeyName('fk_tokens_roles')

    table.boolean('deleted').notNull().defaultTo(false)
    table.datetime('created_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))
    table.datetime('updated_at', { precision: 2 }).notNull().defaultTo(knex.fn.now(2))

    table.index('user_id', 'ix_tokens_user_id')
    table.index(['deleted', 'token_id'], 'ix_tokens_deleted_token_id_id')
  })
  await knex.raw('ALTER TABLE tokens CLUSTER ON ix_tokens_deleted_token_id_id')
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('tokens')
  await knex.schema.dropTable('users_roles')
  await knex.schema.dropTable('roles')
  await knex.schema.dropTable('users')
}
