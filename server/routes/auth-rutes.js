const Router = require('express')
const router = new Router()
const userController = require('../controllers/auth-controllers')
const authMiddleware = require('../middleware/auth-middleware')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/user',  authMiddleware  , userController.check)

module.exports = router