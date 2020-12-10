const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    products: [
        {
            product: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product'
            },
            size : {
                type: Number,
                required: true,
            },
            price: { 
                type: Number, 
                required: true
            },
            quantity: Number
        }
    ],
    total: {
        type: Number,
        required: true
    },
    address: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    phone: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    date: { 
        type: Date, 
        default: Date.now() 
    },
    status: {
        type: String,
        //required: true,
    },
    // paymentType: String,
    // paymentStatus: String,
    // isOrderCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Transaction', transactionSchema);