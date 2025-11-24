import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Card from '#models/card'

export default class CardsSeeder extends BaseSeeder {
  public async run () {
    await Card.createMany([
      // --- Deck 1 : Space Marines ---
      {
        question: 'Qui a rédigé le Codex Astartes ?',
        reponse: 'Roboute Guilliman',
        deckId: 1,
      },
      {
        question: 'Quel est le surnom des Ultramarines ?',
        reponse: 'Les Fils d’Ultramar',
        deckId: 1,
      },
      {
        question: 'Combien de Space Marines composent une compagnie classique ?',
        reponse: '100',
        deckId: 1,
      },

      // --- Deck 2 : Chaos ---
      {
        question: 'Quel dieu du Chaos représente la violence et la rage ?',
        reponse: 'Khorne',
        deckId: 2,
      },
      {
        question: 'Quel est le nom de la légion de Mortarion ?',
        reponse: 'Death Guard',
        deckId: 2,
      },
      {
        question: 'Comment se nomme la dimension où vivent les dieux du Chaos ?',
        reponse: 'Le Warp',
        deckId: 2,
      },

      // --- Deck 3 : Tyranides ---
      {
        question: 'Comment se nomme l’intelligence collective tyranide ?',
        reponse: 'L’Esprit de la Ruche',
        deckId: 3,
      },
      {
        question: 'Quel est le rôle principal d’un Hormagaunt ?',
        reponse: 'Attaques au corps à corps rapides',
        deckId: 3,
      },
      {
        question: 'Quel type d’unité est un Carnifex ?',
        reponse: 'Monstre de choc lourdement blindé',
        deckId: 3,
      },
    ])
  }
}
