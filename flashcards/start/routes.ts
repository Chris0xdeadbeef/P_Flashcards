/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import CardsController from '#controllers/cards_controller'
import DecksController from '#controllers/decks_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

//routes pour les decks
router.get('/decks/user_id/show', [DecksController, 'show']).as('deck.show')

router.get('/decks', [DecksController, 'index']).as('decks.index')

router.get('/deck/create', [DecksController, 'create']).as('deck.create')
router.post('/deck/add', [DecksController, 'store']).as('deck.store')

router.get('/deck/:deck_id/cards', [DecksController, 'showCards']).as('deck.showCards')
router.put('/deck/:deck_id/publish', [DecksController, 'togglePublish']).as('deck.publish')

router.get('/deck/:deck_id/edit', [DecksController, 'edit']).as('deck.edit')
router.put('/deck/:deck_id', [DecksController, 'update']).as('deck.update')

router.delete('/deck/:deck_id/delete', [DecksController, 'destroy']).as('deck.destroy')


//routes pour les cards
router.get('/cards', [CardsController, 'index']).as('cards.index')

router.get('/deck/:deck_id/card/create', [CardsController, 'create']).as('card.create')
router.post('/deck/:deck_id/card/add', [CardsController, 'store']).as('card.store')

router.get('/deck/:deck_id/cards/:card_id/edit', [CardsController, 'edit']).as('card.edit')
router.put('/deck/:deck_id/cards/:card_id', [CardsController, 'update']).as('card.update')

router.delete('/deck/:deck_id/cards/:card_id/delete', [CardsController, 'destroy']).as('card.destroy')

//routes pour users
router.get('/users', [UsersController, 'index']).as('users.index')
router.get('/user/show', [UsersController, 'show']).as('users.show')

//login
router
  .post('/login', [AuthController, 'handleLogin'])
  .as('auth.handleLogin')

router
  .post('/logout', [AuthController, 'handleLogout'])
  .as('auth.handleLogout')







