const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Comment = require('../models/comment');

router.get('/allComment', (req, res) => {
    Comment.find({})
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        })
    });
});

router.post('/create',async (req, res) =>{
    const new_comment = new Comment ({
        _id: new mongoose.Types.ObjectId(),
        username : req.body.username,
        title : req.body.title,
        comment: req.body.comment
    })
    await new_comment.save()
    .then(new_comment =>{
        res.status(201).json({
            message: new_comment
        })
    })
    .catch(error =>{
        res.status(500).json({
            error: error
        })
    })
})

router.delete('/delete/:id', async (req, res) =>{
    const comment = await Comment.findById(req.params.id)
    if (comment) {
        await comment.remove()
        res.status(201).json({
            message: 'Xóa comment thành công',
            comment: comment
        })
    } else {
        res.status(401).json({
            message:'Not found'
        })
    }

})



module.exports = router;