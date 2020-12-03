const mongoose = require('mongoose');

const userAddressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    address: [{
        fullName: { type: String, required: true },
        mobileNumber: { type: Number, required: true },
        pinCode: { type: Number,},
        locality: { type: String,  },
        address: { type: String, required: true },
        cityDistrictTown: { type: String,  },
        state: { type: String},
        landmark: String,
        alternatePhoneNumber: Number
    }]
});

module.exports = mongoose.model('UserAddress', userAddressSchema);