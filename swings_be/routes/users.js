const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const is_auth  = require('../middleware/auth-token');

const User = require('../models/user');
//const UserAddress = require('../models/user_Address');

router.post('/register', (req, res, next) => {
    User.findOne({email: req.body.email})
    .exec()
    .then(user => {

        if(user){
            return res.status(500).json({
                message: 'Email đã tồn tại'
            })
        }else{

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error: 'Đã xảy ra lỗi'
                    });
                }else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        username : req.body.username,
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        address: req.body.address,
                        phone: req.body.phone,
                        //createdAt: new Date().toISOString()
                    });
                    user.save()
                    .then(doc => {
                        res.status(201).json({
                            message: 'Tạo tài khoản thành công'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                } 
            });
        } 
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email})
    .select('_id username email password')
    .exec()
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.status(500).json({
                        message: 'Đăng nhập thất bại'
                    })
                }else{
                    if(result){
                        const payload = {
                            userId: user._id,
                            iat:  Math.floor(Date.now() / 1000) - 30,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 24),
                        }
                        jwt.sign(payload, 'mysecretkey', (err, token) => {
                            if(err){
                                return res.status(500).json({
                                    message: 'Xác thực thất bại'
                                });
                            }else{
                                res.status(200).json({
                                    message: {
                                        user: {
                                            userId: user._id,
                                            username: user.username,
                                            email: user.email
                                        },
                                        token: token
                                    }
                                })
                            }
                            
                        })
                    }else{
                        res.status(500).json({
                            message: 'Mật khẩu không đúng'
                        });
                    }
                }
            });

        }else{
            res.status(500).json({
                message: 'Email không tồn tại'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })


});
router.post('/address', is_auth, (req, res, next) => {
    User.findOne({"user": req.body.userId})
    .exec()
    .then(user => {
        if(user){
            User.findOneAndUpdate({"user": req.body.userId}, {
                $push: {
                    "address": req.body.address
                }
            }, {
                new: true
            })
            .then(doc => {
                res.status(201).json({
                    message: doc
                });
            });

        }
    //     else{
    //         const user = new User({
    //             _id: new mongoose.Types.ObjectId(),
    //             user: req.body.userId,
    //             address: req.body.address
    //         });
    //         user.save()
    //         .then(doc => {
    //             res.status(201).json({
    //                 message: doc
    //             });
    //         })
    //         .catch(error => {
    //             res.status(500).json({
    //                 error: error
    //             });
    //         })
    //     }
    });

});
router.get('/get-address/:userId', is_auth, (req, res, next) => {
    User.findOne({"user": req.params.userId})
    .select('_id username address')
    .exec()
    .then(user => {
        res.status(200).json({
            message: user
        })
    })
    .catch(error => {
        res.status(500).json({
            error: error
        })
    })

});
module.exports = router;