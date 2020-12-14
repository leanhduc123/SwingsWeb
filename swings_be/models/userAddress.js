const mongoose = require('mongoose');

const userAddressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    address: [{
        name: { 
            type: String, 
            required: true 
        },
        phone: { 
            type: String, 
            required: true 
        },
        address: { 
            type: String, 
            required: true 
        },
        state: { 
            type: String, 
            required: true 
        },
    }]
});

module.exports = mongoose.model('UserAddress', userAddressSchema);