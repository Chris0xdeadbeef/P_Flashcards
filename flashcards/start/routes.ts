/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import DecksController from '#controllers/decks_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/decks/:deck_id/show', [DecksController, 'show']).as('deck.show')
router.get('/decks', [DecksController, 'index']).as('decks.index')
router.get('/deck/:deck_id/edit', [DecksController, 'edit']).as('deck.edit')

router.put('/deck/:deck_id/publish', [DecksController, 'togglePublish']).as('deck.publish')

router.put('/deck/:deck_id', [DecksController, 'update']).as('deck.update')
router.delete('/deck/:deck_id/delete', [DecksController, 'destroy']).as('deck.destroy')

router.get('/cards', [CardsController, 'index']).as('cards.index')

router.get('/users', [UsersController, 'index']).as('users.index')
router.get('/user/show', [UsersController, 'show']).as('users.show')









