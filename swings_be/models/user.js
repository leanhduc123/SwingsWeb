const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
     },
    password: {
         type: String,
         required: true
     },
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    transaction: [
        //transactionid:
    ]
        
    // contact: { type: String },
    // profilePic: { type: String },
    // createdAt: Date,
    // updatedAt: Date
});

module.exports = mongoose.model('User', userSchema);