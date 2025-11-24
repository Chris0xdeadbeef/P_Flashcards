import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Card from '#models/card'

export default class CardsSeeder extends BaseSeeder {
  public async run() {
    await Card.createMany([
      // --- Deck 1 : Space Marines ---
      { question: 'Qui a rédigé le Codex Astartes ?', reponse: 'Roboute Guilliman', deckId: 1 },
      {
        question: 'Quel est le surnom des Ultramarines ?',
        reponse: 'Les Fils d’Ultramar',
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

      // --- Deck 4 : Orks ---
      { question: 'Quel est le plus grand clan ork ?', reponse: 'Goff', deckId: 4 },
      { question: 'Comment appelle-t-on les véhicules orks ?', reponse: 'Kustoms', deckId: 4 },

      // --- Deck 5 : Eldars ---
      {
        question: 'Quelle est la caste des guerriers Eldars ?',
        reponse: 'Aspect Warriors',
        deckId: 5,
      },
      {
        question: 'Quel est le but principal des Eldars ?',
        reponse: 'Préserver leur civilisation et éviter le déclin',
        deckId: 5,
      },

      // --- Deck 6 : Necrons ---
      {
        question: 'Quel est le rôle des Overlords ?',
        reponse: 'Commandants suprêmes des dynasties',
        deckId: 6,
      },
      {
        question: 'Comment s’appelle l’essence énergétique des Necrons ?',
        reponse: 'Nécronite',
        deckId: 6,
      },

      // --- Deck 7 : Tau ---
      { question: 'Quelle caste est responsable des armes ?', reponse: 'Caste des Feu', deckId: 7 },
      {
        question: 'Comment appelle-t-on le dirigeant suprême Tau ?',
        reponse: 'Ethereal',
        deckId: 7,
      },

      // --- Deck 8 : Imperial Guard ---
      { question: 'Comment s’appelle l’infanterie de base ?', reponse: 'Guardsmen', deckId: 8 },
      {
        question: 'Quel char est emblématique de l’Imperial Guard ?',
        reponse: 'Leman Russ',
        deckId: 8,
      },

      // --- Deck 9 : Inquisition ---
      {
        question: 'Quels sont les trois ordres principaux ?',
        reponse: 'Ordo Hereticus, Ordo Malleus, Ordo Xenos',
        deckId: 9,
      },
      {
        question: 'Quel est le rôle principal de l’Inquisition ?',
        reponse: 'Protéger l’Imperium contre la corruption',
        deckId: 9,
      },

      // --- Deck 10 : Sisters of Battle ---
      { question: 'Qui commande les SoB ?', reponse: 'Canoness', deckId: 10 },
      {
        question: 'Quel est le but des SoB ?',
        reponse: 'Maintenir la foi et l’ordre dans l’Imperium',
        deckId: 10,
      },
    ])
  }
}
