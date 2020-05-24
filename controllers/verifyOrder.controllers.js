const cartModel = require('../models/cart.model')
const validationResult = require('express-validator').validationResult

exports.postVerifyOrder = (req, res, next) => {


    if (validationResult(req).isEmpty()) {


        res.render('verifyOrder', {
            isUser: true,
            /* order button funcation
            orderItem: {
                cartId: req.body.cartId,
                /*order here a value for submit button to know 
                that the value is comming to submit one product in the cart  
                order: req.body.Order,

            },
            
             the orderInfo Containing a information about the order it self */
            orderInfo: {
                subTotal: req.body.cartSubTotal,
                ShippingCost: req.body.CartShippingCost,
                CartTotal: req.body.CartTotal,
                CartProductAmount: req.body.CartProductAmount

            },
            cartId: req.body.cartId,
            isAdmin: req.session.isAdmin,
            pageTitle: 'verifyOrder',
            validationErrors: req.flash('validationErrors'),
        })


    } else {
        req.flash('validationErrors', validationResult(req).array())
        req.flash('counter', req.body.counter)

        res.redirect('/cart')
    }


}
