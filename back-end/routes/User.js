
const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/user')

router.post('/', controller.create)
router.get('/', verifyToken, controller.retrieve)
router.get('/:id',verifyToken, controller.retrieveOne)
router.put('/', verifyToken,controller.update)
router.delete('/',verifyToken, controller.delete)
router.post('/login', controller.login)
router.post('/logout', controller.logout)

module.exports = router
