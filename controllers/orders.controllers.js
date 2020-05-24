const ordersModel = require('../models/orders.model')
const validationResult = require('express-validator').validationResult
const cartModel = require('../models/cart.model')

/* order button funcation
exports.postOrder = (req, res, next) => {
    cartModel.getItemByCartId(req.body.cartId).then((item) => {




        let buyerInfo = {
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.firstName.city,
            mobileNumber: req.body.mobileNumber
        }
        let orderInfor = {
            subTotal: req.body.subTotal,
            ShippingCost: req.body.ShippingCost,
            CartTotal: req.body.CartTotal,
            CartProductAmount: req.body.CartProductAmount,
        }


        ordersModel.addNewOrder(orderInfor, buyerInfo, item).then(() => {


        }).catch(erro => {
            console.log(erro, 'postOrder')
        })
        next()

    })
}


*/
exports.deleteCart = (req, res, next) => {
    cartModel.deleteItem(req.body.cartId).then(() => {
        res.redirect('/orders')
    }).catch((erro) => {
        console.log(erro, 'deleteCart')
    })
}



exports.getOrder = (req, res, next) => {
    ordersModel.getItemByUser(req.session.userId).then(items => {
        res.render('orders', {
            items: items,
            isUser: true,
            validationErrors: req.flash('validationErrors')[0],
            isAdmin: req.session.isAdmin,
            pageTitle: 'Orders'

        })
    }).catch(erro => console.log(erro, 'getOrder'))
}

exports.cancelOrder = (req, res, next) => {
    ordersModel.cancelOrder(req.body.userId, req.body.cartId).then(() => {
        res.redirect(req.body.redirectTo)
    }).catch((erro) => {
        console.log(erro)
    })
}

exports.postOrderCancelAll = (req, res, next) => {
    ordersModel.cancelAllOrders().then(() => {

        res.redirect(req.body.redirectTo)
    }).catch((erro) => {
        console.log(erro)
    })
}





exports.postOrderAllCart = (req, res, next) => {

    if (validationResult(req).isEmpty()) {

        ordersModel.findAllOrder(req.session.userId).then((All_Order_In_The_Cart) => {
            console.log('req.session.userEmail', req.session.userEmail)
            let buyerInfo = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                addressLine1: req.body.addressLine1,
                addressLine2: req.body.addressLine2,
                city: req.body.city,
                mobileNumber: req.body.mobileNumber,
                userEmail: req.session.userEmail
            }
            let orderInfor = {
                subTotal: req.body.subTotal,
                ShippingCost: req.body.ShippingCost,
                CartTotal: req.body.CartTotal,
                CartProductAmount: req.body.CartProductAmount,
                date: new Date()
            }

            ordersModel.addNewOrder(orderInfor, buyerInfo, All_Order_In_The_Cart).then(() => {
                console.log('im here next to the next ordersModel.addNewOrde')
                next()

            }).catch(erro => {
                console.log(erro, 'postOrderAllCart')
            })


        })
    } else {
        req.flash('validationErrors', validationResult(req).array())
        res.redirect('/verifyOrder/orderAll')
    }





}




exports.postOrderAllCartDelete = (req, res, next) => {
    cartModel.deleteAllItem(req.session.userId).then(() => {
        console.log('next to orders redirect')
        res.redirect('/orders')
    }).catch((erro) => {
        console.log(erro)
    })
}





