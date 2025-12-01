/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import DecksController from '#controllers/decks_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/decks/:deck_id/show', [DecksController, 'show']).as('deck.show')
router.get('/decks', [DecksController, 'index']).as('decks.index')
router.get('/users', [UsersController, 'index']).as('users.index')
router.get('/user/show', [UsersController, 'show']).as('users.show')

router.delete('/deck/:deck_id/delete', [DecksController, 'destroy']).as('deck.destroy')




