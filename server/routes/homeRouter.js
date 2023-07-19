import Router from 'express'
import homeController from '../controllers/homeController'

const router = new Router()
router.get('/number', homeController.getRandomNumberByRoute)

module.exports = router
