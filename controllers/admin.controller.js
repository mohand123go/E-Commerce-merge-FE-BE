
const validationResult = require('express-validator').validationResult
const ProductsModel = require('../models/products.model')
const ordersModel = require('../models/orders.model')
const authModel = require('../models/auth.model')

exports.getAdd = (req, res, next) => {

    res.render('add-product', {
        validationErros: req.flash('validationErrors'),

        isUser: req.session.userId,
        isAdmin: req.session.isAdmin,
        pageTitle: 'Add Product'
    })
}

// TEST 
/*
exports.getOrdersToManger = (req, res, next) => {

    let statusfilter = req.query.statusfilter
    let getAllItemWithFilter
    if (statusfilter && statusfilter !== 'all') {
        getAllItemWithFilter = ordersModel.getItemWithFilter(statusfilter)
    }
    else {
        getAllItemWithFilter = ordersModel.getAllItem()
    }

    getAllItemWithFilter.then(items => {
        authModel.getUserInfo(items).then((userEmail) => {
            let allOrder = []

            for (let i = 0; i < items.length; i++) {
                allOrder.push({
                    _id: items[i]._id,
                    userEmail: userEmail[i],
                    name: items[i].name,
                    price: items[i].price,
                    amount: items[i].amount,
                    address: items[i].address,
                    status: items[i].status,
                    productTimestamp: items[i].status,
                    productId: items[i].productId,
                    userId: items[i].userId,

                })
            }
            res.render("manges-orders", {
                items: allOrder,
                isUser: req.session.userId,
                isAdmin: req.session.isAdmin,
                validationErrors: req.flash('validationErrors')[0],
                searchResult: req.flash('searchResult')[0],
                pageTitle: 'Manges Orders'
            })
        }).catch(error => {
            next(error)
        })
    }
    ).catch(error => {
        next(error)
    })
}

*/


exports.getOrdersToManger = (req, res, next) => {

    ordersModel.getAllOrderToAdmin().then((orders) => {


        res.render("manges-orders", {
            AllOrders: orders,
            isUser: req.session.userId,
            isAdmin: req.session.isAdmin,
            validationErrors: req.flash('validationErrors'),
            searchResult: req.flash('soo'),
            pageTitle: 'Manges Orders'
        })
    }).catch(erro => {
        next(erro)
    })

}


exports.searchByUserEmail = (req, res, next) => {
    if (validationResult(req).isEmpty()) {

        req.flash('searchResult', req.body.search)
        res.redirect('/admin/orders')

    } else {

        req.flash('validationErrors', validationResult(req).array())
        res.redirect('/admin/orders')
    }
}

exports.postSearch = (req, res, next) => {
    console.log('req.body.mangeOrderStatus', req.body.mangeOrderStatus)
    ordersModel.searchByUserinfo(req.body.mangeOrderStatus, req.body.mangeOrderSearch).then((searchByUserinfoReuslt) => {
        console.log('searchByUserinfoReuslt', searchByUserinfoReuslt)
        if (searchByUserinfoReuslt.length == 0) {
            searchByUserinfoReuslt.push(-1)
        }
        req.flash('soo', searchByUserinfoReuslt)
        res.redirect('/admin/orders')

    })
}

exports.postAdd = (req, res, next) => {




    if (validationResult(req).isEmpty()) {


        let imageobj = []
        for (let i = 0; i < req.files.imagesArray.length; i++) {
            let obj2 = {
                image_name: req.files.imagesArray[i].filename,
                image_color: req.body.color[i]
            }
            imageobj.push(obj2)
        }


        let obj = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            imageAndColor: imageobj,
            description: req.body.description,
            size: req.body.size,
            first_color: req.body.first_color,
            second_color: req.body.second_color,
            third_color: req.body.third_color
        }


        ProductsModel.postProducts(obj).then(() => {
            res.redirect('/')
        }).catch(error => {
            next(error)
        })

    } else {
        req.flash('validationErrors', validationResult(req).array())
        res.redirect('/admin/add')
    }
}

exports.postCanceltOrdersByManger = (req, res, next) => {
    ordersModel.cancelOrderByManger(req.body.cartId).then(() => {
        res.redirect('/admin/orders')
    }).catch(error => {
        next(error)
    })
}

exports.postUpdateOrdersByManger = (req, res, next) => {

    ordersModel.updateOrderByManger(req.body.cartId, req.body.editedStatus).then(() => {



    }).then(() => {
        res.redirect('/admin/orders')
    }).catch(error => {
        next(error)
    })
}
