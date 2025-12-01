import Deck from '#models/deck'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/users/index', { users })
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
  async show({ params, view, auth }: HttpContext) {
    // Récupère l'utilisateur
    // TODO : Lorsque l'authentification sera en place
    // const user_id = auth.user.id
    // En attendant c'est en dur
    const user_id = 1

    const user = await User.findOrFail(user_id)

    // Récupère les decks de cet utilisateur
    const decks = await Deck.query()
      .where('user_id', user_id)
      .orderBy('created_at', 'desc')
    return view.render('pages/users/show', { user, decks })
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
