const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { 
        type: String,
        required: true 
    },
    phone: {
        type: String,
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    order: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            price: { type: Number, required: true},
            quantity: Number
        }
    ],
    total: {
        type: Number,
        required: true
    },
    orderDate: { 
        type: Date, 
        default: Date.now() 
    },
    isOrderCompleted: { 
        type: Boolean, 
        default: false 
    }
});

module.exports = mongoose.model('Order', orderSchema);