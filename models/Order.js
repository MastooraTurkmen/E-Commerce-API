const mongoose = require('mongoose')

const SingleOrderItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
})

const OrderSchema = mongoose.Schema({
    tax: {
        type: Number,
        required: true
    },
    shippingFee: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    orderItems: [SingleOrderItemSchema],
    status: {
        type: String,
        enum: ['pending', 'failed', 'delivered', 'canceled'],
        default: 'pending'
    }
    ,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    clientSecret: {
        type: String,
        require: true
    },
    paymentIntendId: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema)