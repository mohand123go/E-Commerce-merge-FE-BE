const router = require('express').Router()
const authGuards = require('./guards/auth.guards')
const bodyParser = require('body-parser')
const check = require('express-validator').check

const ordersController = require('../controllers/orders.controllers')
router.get('/', authGuards.isAuth, ordersController.getOrder)
router.post('/cancel', bodyParser.urlencoded({ extended: true }), authGuards.isAuth, ordersController.cancelOrder)

router.post('/cancelAll', bodyParser.urlencoded({ extended: true }), authGuards.isAuth, ordersController.postOrderCancelAll)


/* order button funcation
router.post('/', authGuards.isAuth,
    bodyParser.urlencoded({ extended: true }),
    ordersController.postOrder, ordersController.deleteCart)
*/

router.post('/orderAll', authGuards.isAuth,
    bodyParser.urlencoded({ extended: true }),
    check('firstName').not().isEmpty().withMessage('first name is require'),
    check('lastName').not().isEmpty().withMessage('last name is require'),
    check('addressLine1').not().isEmpty().withMessage('address line 1 is require'),
    check('addressLine2').not().isEmpty().withMessage('address line 2 is require'),
    check('city').not().isEmpty().withMessage('city is require'),
    check('mobileNumber').not().isEmpty().withMessage('mobile number is require'),
    ordersController.postOrderAllCart, ordersController.postOrderAllCartDelete)






module.exports = router
