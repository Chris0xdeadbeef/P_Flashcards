import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Deck from '#models/deck'

export default class DecksSeeder extends BaseSeeder {
  public async run () {

    await Deck.createMany([
      {
        name: 'Space Marines – Codex Astartes',
        description: 'Lore général et organisation des Space Marines.',
        userId: 1,
        published: true,
      },
      {
        name: 'Chaos – Légions Renégates',
        description: 'Les dieux du Chaos, démons et traîtres.',
        userId: 2,
        published: false,
      },
      {
        name: 'Xenos – Tyranides',
        description: 'Biomorphes, flotte-ruche, types d’unités.',
        userId: 1,
        published: true,
      }
    ])
  }
}
