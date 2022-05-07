
const express = require('express')
const router = express.Router()

// Importa o controller correspondente
const controller = require('../controllers/user')

router.post('/', controller.create)
router.get('/', controller.retrieve)
router.get('/:id', controller.retrieveOne)
router.put('/', controller.update)
router.delete('/', controller.delete)
router.post('/login', controller.login)
router.post('/logout', controller.logout)

module.exports = router
