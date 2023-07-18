import Router from 'express'
import homeRouter from './homeRouter'

const router = new Router()
router.use('/home', homeRouter)

module.exports = router
