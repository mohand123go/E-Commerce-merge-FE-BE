const router = require('express').Router()
const bodyParser = require('body-parser')
const orderInfoControllers = require('../controllers/orderInfo.controllers')
router.get('/:CartId', bodyParser.urlencoded({ extended: true }), orderInfoControllers.getOrderInfo)

module.exports = router