import Router from 'express'
import homeController from '../controllers/homeController'

const router = new Router()
router.get('/number', homeController.getRandomNumber)

module.exports = router
