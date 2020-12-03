const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
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
     contact: { type: String },
     profilePic: { type: String },
     createdAt: Date,
     updatedAt: Date
});

module.exports = mongoose.model('User', userSchema);