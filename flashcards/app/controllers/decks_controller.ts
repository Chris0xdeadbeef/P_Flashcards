import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'

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
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

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
