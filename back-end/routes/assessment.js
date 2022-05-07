
const express = require('express')
const router = express.Router()
const verifytoken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/assessment')

router.post('/', controller.create)
router.get('/', verifytoken, controller.retrieve)
router.get('/:id', verifytoken, controller.retrieveOne)
router.put('/', controller.update)
router.delete('/', controller.delete)

module.exports = router
