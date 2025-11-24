import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Hash from '@adonisjs/core/services/hash'

export default class UsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        firstname: 'Roboute',
        lastname: 'Guilliman',
        username: 'primarch_ultramar',
        email: 'roboute@imperium.com',
        password: await Hash.make('imperium123'),
        isAdmin: true,
      },
      {
        firstname: 'Erebus',
        lastname: 'Dark Apostle',
        username: 'word_bearer',
        email: 'erebus@chaos.com',
        password: await Hash.make('chaos123'),
        isAdmin: false,
      }
    ])
  }
}
