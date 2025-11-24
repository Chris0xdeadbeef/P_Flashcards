/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import DecksController from '#controllers/decks_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/deck/:id/show', [DecksController, 'show']).as('deck.show')
router.get('/decks', [DecksController, 'index']).as('decks.index')
