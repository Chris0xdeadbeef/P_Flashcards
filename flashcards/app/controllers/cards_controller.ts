import Card from '#models/card'
import Deck from '#models/deck'
import { cardValidator } from '#validators/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ params, view }: HttpContext) {
    const cards = await Card.query().preload('deck')
    return view.render('pages/cards/index', { cards })
  }

  /**
   * Display form to create a new record
   */
  async create({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.deck_id)
    return view.render('pages/cards/createCard', { deck })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ params, request, response, session }: HttpContext) {
    const deck = await Deck.findOrFail(params.deck_id)

    // Valider les données
    const validatedData = await request.validateUsing(cardValidator)

    // Créer la carte et lier au deck
    const card = new Card()
    card.fill(validatedData)
    card.deckId = deck.id

    await card.save()

    // Message flash
    session.flash({ success: 'Carte créée avec succès.' })

    // Redirection vers la liste des cartes du deck
    return response.redirect().toRoute('deck.showCards', { deck_id: deck.id })
  }

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
  async edit({ params, view }: HttpContext) {
    const card = await Card.findOrFail(params.card_id)
    const deck = await Deck.findOrFail(params.deck_id)
    return view.render('pages/cards/modifyCard', { card, deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const { deck_id, card_id } = params

    // Valider les données du formulaire
    const validatedData = await request.validateUsing(cardValidator)

    // Récupérer la carte et vérifier qu'elle appartient bien au deck
    const card = await Card.query().where('id', card_id).where('deck_id', deck_id).firstOrFail()

    // Mettre à jour et sauvegarder
    card.merge(validatedData)
    await card.save()

    // Message flash et redirection vers la liste des cartes du deck
    session.flash({ success: 'Carte mise à jour avec succès.' })

    return response.redirect().toRoute('deck.showCards', { deck_id })
  }
  /**
   * Delete record
   */
  async destroy({ params, auth, response }: HttpContext) {
    const card = await Card.query()
      .where('id', params.card_id)
      .where('deck_id', params.deck_id)
      .firstOrFail()

    await card.delete()
    return response.redirect().toRoute('deck.showCards', {
      deck_id: params.deck_id,
    })
  }
}
