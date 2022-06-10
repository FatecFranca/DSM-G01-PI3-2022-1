
const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/answer')

router.post('/', verifyToken,controller.create)
router.get('/assessment/:id',verifyToken, controller.retrieve)
router.get('/:id',verifyToken, controller.retrieveOne)
router.put('/',verifyToken, controller.update)
router.delete('/',verifyToken, controller.delete)
router.delete('/',verifyToken, controller.delete)
router.get('/user/:id',verifyToken,  controller.userAnswer)

module.exports = router
