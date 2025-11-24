import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('firstname',255).nullable()
      table.string('lastname', 255).nullable()
      table.string('username', 255).nullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 255).notNullable().unique()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.boolean('is_admin').notNullable().defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}