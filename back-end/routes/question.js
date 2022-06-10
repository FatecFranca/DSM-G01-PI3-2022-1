
const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/question')

router.post('/', controller.create)
router.get('/', verifyToken, controller.retrieve)
router.get('/:id', controller.retrieveOne)
router.put('/', controller.update)
router.delete('/', controller.delete)
router.get('/group/:groupId', controller.retrieveByGroup)
//rotas para as alterações retiradas do git do professor
router.get('/bygroup', controller.retrieveByGroup)
router.get('/groupandnumber', controller.retrieveByGroupAndNumber)

module.exports = router
