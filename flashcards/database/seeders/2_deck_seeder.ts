import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Deck from '#models/deck'

export default class DecksSeeder extends BaseSeeder {
  public async run() {
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
        published: true,
      },
      {
        name: 'Xenos – Tyranides',
        description: 'Biomorphes, flotte-ruche, types d’unités.',
        userId: 1,
        published: true,
      },
      {
        name: 'Orks – Waaagh!',
        description: 'Les orks, leurs clans et tactiques de combat.',
        userId: 1,
        published: true,
      },
      {
        name: 'Eldars – Craftworlds',
        description: 'Psychologie et armées Eldars.',
        userId: 2,
        published: true,
      },
      {
        name: 'Necrons – Dynasties',
        description: 'Lore et unités Necrons.',
        userId: 1,
        published: true,
      },
      {
        name: 'Tau – Empire du Bien Suprême',
        description: 'Système de castes et unités Tau.',
        userId: 2,
        published: true,
      },
      {
        name: 'Imperial Guard – Astra Militarum',
        description: 'Infanterie, blindés et tactiques de l’IM.',
        userId: 1,
        published: true,
      },
      {
        name: 'Inquisition – Ordo Hereticus',
        description: 'Rôle et hiérarchie des inquisiteurs.',
        userId: 2,
        published: true,
      },
      {
        name: 'Sisters of Battle – Adepta Sororitas',
        description: 'Lore, unités et équipement des SoB.',
        userId: 1,
        published: true,
      },
    ])
  }
}
