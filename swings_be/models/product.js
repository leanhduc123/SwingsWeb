const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    },
    // slug: { 
    //     type: String, 
    //     required: true, 
    //     unique: true 
    // },
    category: {
        type: String,
        required: true
    },
    SubCategory: {
        type: String,
    },
    description: { 
        type: String 
    },
    price: { 
        type: Number, 
        required: true 
    },
    discount: { 
        type: String 
    },
    size: [],
    img: [],
    rateting: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            userId: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'User' },
            score: String,
        }
    ],
    // keyword: {type: String},
    // category: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Category', 
    //     required: true  
    // },
    // createdAt: { type: Date, default: Date.now },
    // createdBy: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin' 
    // },
    // // updatedAt: Date,
    // updatedBy: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Admin' 
    // }
});

module.exports = mongoose.model('Product', productSchema);