const ordersModel = require('../models/orders.model')
const validationResult = require('express-validator').validationResult
const cartModel = require('../models/cart.model')

exports.postOrder = (req, res, next) => {
    cartModel.getItemByCartId(req.body.cartId).then((item) => {

        let buyerInfo = req.body

        ordersModel.addNewOrder(buyerInfo, item).then(() => {


        }).catch(erro => {
            console.log(erro, 'postOrder')
        })
        next()

    })
}



exports.deleteCart = (req, res, next) => {
    cartModel.deleteItem(req.body.cartId).then(() => {

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

    ordersModel.findAllOrder().then((All_Order_In_The_Cart) => {

        let buyerInfo = req.body
        ordersModel.addNewOrder(buyerInfo, All_Order_In_The_Cart).then(() => {


        }).catch(erro => {
            console.log(erro, 'postOrderAllCart')
        })
        next()

    })



}




exports.postOrderAllCartDelete = (req, res, next) => {
    cartModel.deleteAllItem().then(() => {
        res.redirect('/orders')
    }).catch((erro) => {
        console.log(erro)
    })
}





