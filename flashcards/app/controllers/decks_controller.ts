import Card from '#models/card'
import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const decks = await Deck.query().where('published', true)
    return view.render('pages/decks/show', { decks })
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
    const deck = await Deck.findOrFail(params.deck_id)

    return view.render('pages/decks/show', { deck })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.deck_id)
    return view.render('pages/decks/modifyDeck', { deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const deckId = params.deck_id

    // Valider les données
    const validatedData = await request.validateUsing(deckValidator)

    // Recherche du deck dans la DB
    const deck = await Deck.findOrFail(deckId)

    deck.merge(validatedData)
    await deck.save()
    return response.redirect().toRoute('users.show', { deck_id: deck.id })
  }

  async showCards({ params, view }: HttpContext) {
    const cards = await Card.query().where('deck_id', params.deck_id)
    const deck = await Deck.findOrFail(params.deck_id)
    return view.render('pages/decks/showCards', { deck, cards })
  }

  async togglePublish({ params, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.deck_id)

    // Inverse l'état publié
    deck.published = !deck.published
    await deck.save()

    // Retour à la page précédente
    return response.redirect().back()
  }

  /**
   * Delete record
   */
  async destroy({ params, auth, response, session }: HttpContext) {
    const deck = await Deck.findOrFail(params.deck_id)
    await deck.delete()
    session.flash({ success: 'Deck supprimé.' })

    // Redirection vers la page de l'utilisateur
    return response.redirect().toRoute('users.show')
  }
}
