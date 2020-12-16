const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true  
    },
    subCategory: {
        type: String,
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String 
    },
    image: [{
        img: {
            type: String,
            required: true
        }
    }],
    discount: {
        type: String,
    },
    size: [{
        size: {
            type: String,
            required: true
        }
    }],
    rating: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            score: String,
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    //keyword: {type: String},
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    // createdBy: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin' 
    // },
    updatedAt: Date 
    
    // updatedBy: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin'
    // }
});

module.exports = mongoose.model('Product', productSchema);