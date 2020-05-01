
const orderModel = require('../models/orders.model')

exports.getOrderInfo = (req, res, next) => {


    let CartId = req.params.CartId

    orderModel.getOrderByUserIdAndCartId(CartId, req.session.userId).then(orderFullInfo => {

        res.render("order-info", {
            orderFullInfo: orderFullInfo,
            CartId: CartId,
            isUser: req.session.isUser,
            isAdmin: req.session.isAdmin,
            validationErrors: req.flash('validationErrors')[0],
            pageTitle: 'order-info',
            isUser: req.session.userId,

        })


    }).catch((erro) => {
        next(erro)
    })

}
