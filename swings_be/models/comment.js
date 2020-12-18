const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model('Comment', commentSchema);