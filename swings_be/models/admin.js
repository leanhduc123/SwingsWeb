const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    email: { 
        type: String, 
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createdAt: Date
});

module.exports = mongoose.model('Admin', adminSchema);