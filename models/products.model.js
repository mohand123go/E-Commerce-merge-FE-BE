const mongoose = require("mongoose")

const DB_URl = "mongodb://localhost:27017/online-shop"

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    imageAndColor: [
        {
            image_name: String,
            image_color: String
        }],
    description: String,
    size: [{
        type: Number
    }],
    first_color: String,
    second_color: String,
    third_color: String

})
const Product = mongoose.model('product', productSchema)




exports.postProducts = (data) => {


    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            let newProduct = new Product(data)
            return newProduct.save()
        }).then(() => {
            mongoose.disconnect()
            resolve()
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })

    })




}




exports.getAllProducts = () => {

    // connect to db

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Product.find({})
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })

    // get products 
    // disconnect

}

exports.getProductsByCategory = (category) => {

    // connect to db

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Product.find({ category: category })
        }).then(products => {
            mongoose.disconnect()
            resolve(products)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })

    // get products 
    // disconnect

}

exports.getProductById = (id) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Product.findById(id);
        }).then(product => {
            mongoose.disconnect();
            resolve(product);
        }).catch((erro) => {
            mongoose.disconnect();
            reject(erro)
        });
    })
}


exports.getFirstProductM = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Product.findOne({});
        }).then(product => {
            mongoose.disconnect();
            resolve(product)
        }).catch((erro) => {
            mongoose.disconnect()
            reject(erro)
        })
    })
}