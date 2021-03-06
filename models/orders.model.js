const mongoose = require('mongoose')
const DB_URl = 'mongodb://localhost:27017/online-shop'

cartModel = require('./cart.model')

const orderSchema = mongoose.Schema({

    orderInfo: {
        subTotal: Number,
        ShippingCost: Number,
        CartTotal: Number,
        CartProductAmount: Number,
        city: String,
        status: {
            type: String,
            default: 'on process'
        },
        date: Date

    },
    buyerInfo: {
        firstName: String,
        lastName: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        mobileNumber: Number,
        userEmail: String

    },

    item: [{
        _id: String,
        name: String,
        price: Number,
        amount: Number,
        userId: String,
        productId: String,
        image_name: String,
        color: String,
        size: String,
        productTimestamp: Number,


    }]


})
const orderItems = mongoose.model('order', orderSchema)

exports.addNewOrder = (orderInfo, buyerInfo, data) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return orderItems.findOne({ productId: data.productId, userId: data.userId, status: 'binding' })
        }
        ).then(items => {
            if (items) {

                let amountStorge = +items.amount + +data.amount
                return orderItems.updateOne({ _id: items._id }, { amount: amountStorge })


            } else {

                let x = {
                    orderInfo,
                    buyerInfo,
                    item: data
                }
                let items = new orderItems(x);
                return items.save()
            }

        }).then(() => {

            mongoose.disconnect();
            resolve()
        }).catch(erro => {
            mongoose.disconnect();
            reject(erro)
        })
    })


}



exports.getItemByUser = (userId) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => orderItems.find({ "item.userId": userId }, {}, { sort: { "orderInfo.date": -1 } })

        ).then((order) => {
            console.log(order)
            mongoose.disconnect()
            resolve(order)
        }).catch(erro => {
            mongoose.disconnect()
            reject(erro)
        })

    })
}

/*orderInfo */
exports.getOrderByUserIdAndCartId = (CartId, userId) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            orderItems.find({ "item.userId": userId, _id: CartId }).then((orderInfo) => {

                resolve(orderInfo)
                mongoose.disconnect()
            }).catch((erro) => {
                reject(erro)
                mongoose.disconnect()
            })
        })
    })
}

exports.cancelOrder = (userId, cartId) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
            orderItems.deleteOne({ _id: cartId, userId: userId })
        ).then(() => {
            mongoose.disconnect()
            resolve()
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })
}


exports.cancelAllOrders = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
            orderItems.deleteMany({ status: 'pending' })
        ).then(() => {
            mongoose.disconnect()
            resolve()
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })
}





exports.findAllOrder = (userId) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return cartModel.cartItem.find({ userId: userId })
        }).then((dbResp) => {

            mongoose.disconnect();
            resolve(dbResp)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })

}






let Add_Address_And_Satuts_To_Orders = (ror, UserAddress) => {
    let ordersList = []
    for (let i = 0; i < ror.length; i++) {
        ordersList[i] = {
            name: ror[i].name,
            price: ror[i].price,
            amount: ror[i].amount,
            address: UserAddress,
            status: 'pending',
            productTimestamp: ror[i].timestamp,
            productId: ror[i].productId,
            userId: ror[i].userId,


        }
    }


    return ordersList
}
exports.orderAllOrder = (All_Order_In_The_Cart, UserAddress) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Add_Address_And_Satuts_To_Orders(All_Order_In_The_Cart, UserAddress)
        }).then((All_Oders) => {
            return orderItems.insertMany(All_Oders);
        }).then(() => {
            mongoose.disconnect();

            resolve()
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })

}








exports.getAllItem = () => {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return orderItems.find({})
        }).then((allOrder) => {

            mongoose.disconnect();

            resolve(allOrder)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)

        })
    })




}


exports.cancelOrderByManger = (cartId) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return orderItems.deleteOne({ _id: cartId })
        }).then(() => {
            mongoose.disconnect()
            resolve()
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })
}

exports.searchByUserinfo = (mangeOrderStatus, mangeOrderSearch) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            if (isNaN(Number(mangeOrderSearch))) {
                const regex = new RegExp('.*' + mangeOrderSearch.toLowerCase().trim() + '.*')

                return orderItems.find({
                    $or: [


                        { "buyerInfo.city": regex },
                        { "buyerInfo.addressLine1": regex },
                        { "buyerInfo.addressLine2": regex }



                    ]
                })
            } else {

                return orderItems.find({
                    $or: [

                        { "buyerInfo.mobileNumber": mangeOrderSearch },
                        { "orderInfo.status": mangeOrderStatus }


                    ]
                })
            }

        }).then((mangeOrderSearchResult) => {

            resolve(mangeOrderSearchResult)
        }).catch(erro => {
            reject(erro)
        })
    })
}
/*
 if (isNaN(Number(mangeOrderSearch))) {

            }

exports.searchByUserinfo = (mangeOrderSearch) => {
    console.log('123', mangeOrderSearch)
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            orderItems.find(
                {
                    $or: [
                        { "buyerInfo.city": mangeOrderSearch }
                    ]
                }).then((mangeOrderSearchResult) => {
                    console.log(mangeOrderSearchResult)
                })
        })
    })
}
 */


exports.updateOrderByManger = async (cartId, stat) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return orderItems.updateOne({ _id: cartId }, { "orderInfo.status": stat })
        }).then(() => {
            mongoose.disconnect();

            resolve()
        }).catch((erro) => {
            mongoose.disconnect(
                reject(erro)
            )
        })
    })

}



exports.getItemWithFilter = (statusFilter) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            let allOrder = orderItems.find({ status: statusFilter })
            return allOrder
        }).then((allOrder) => {
            resolve(allOrder)
            mongoose.disconnect();
        }).catch(erro => {
            mongoose.disconnect()
            reject(erro)
        })

    })


}


/* new admin panal */

/*get all order in the order doc for the admin in the manger order page */

exports.getAllOrderToAdmin = () => {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return orderItems.find({}, {}, { sort: { 'orderInfo.date': -1 } })

        }).then((orders) => {


            mongoose.disconnect();

            resolve(orders)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })

}
