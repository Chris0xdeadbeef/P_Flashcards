import Card from '#models/card'
import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ params, view }: HttpContext) {
    const cards = await Card.query().preload('deck')

    // number = id et, valeur du deck
    const decksMap: Record<number, Deck> = {}
    cards.forEach((card) => {
      if (card.deck) {
        decksMap[card.deck.id] = card.deck
      }
    })

    //prend toutes les valeurs de l’objet decksMap et les met dans un tableau.
    const decks = Object.values(decksMap)

    return view.render('pages/cards/show', { cards, decks })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const cards = await Card.query().where('deck_id', params.deck_id)
    const deck = await Deck.findOrFail(params.deck_id)
    return view.render('pages/cards/show', { deck, cards })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
