const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticate  = require('../middleware/authenticate');

const User = require('../models/user');
const Profile = require('../models/profile');

router.post('/register', (req, res, next) => {
    User.findOne({username: req.body.username})
    .exec()
    .then(user => {
        if(user){
            return res.status(500).json({
                message: 'Username đã tồn tại'
            })
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error: 'Đã có lỗi xảy ra'
                    });
                }else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        //name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        //createdAt: new Date().toISOString()
                    });
                    user.save()
                    .then(doc => {
                        res.status(201).json({
                            //message: 'Đăng ký thành công'
                            message: user
                        });
                    })
                    .catch(er => {
                        res.status(500).json({
                            error: er
                        });
                    });
                }
            });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username})
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
                                return res.status(500).JSON({
                                    message: 'Xác thực thất bại'
                                });
                            }else{
                                res.status(200).json({
                                    message: {
                                        user: {
                                            userId: user._id,
                                            username: user.username,
                                            //email: user.email
                                        },
                                        token: token
                                    }
                                })
                            }
                        })
                    }else{
                        res.status(500).json({
                            message: 'Mật khẩu không chính xác'
                        });
                    }
                }
            });
        }else{
            res.status(500).json({
                message: 'Username không tồn tại'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
});

router.post('/profile', authenticate, (req, res, next) => {
    Profile.findOne({"userId": req.body.userId})
    .exec()
    .then(user => {
        if(user){
            Profile.findOneAndUpdate({"userId": req.body.userId}, {
                userId: req.body.userId,
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            }, {
                new: true
            })
            .then(doc => {
                res.status(201).json({
                    message: doc
                });
            });

        }else{
            const profile = new Profile({
                _id: new mongoose.Types.ObjectId(),
                userId: req.body.userId,
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            });
            profile.save()
            .then(doc => {
                res.status(201).json({
                    message: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                });
            })
        }
    });

});

router.get('/profile/:id', authenticate, (req, res, next) => {
    const user = req.params.userId
    Profile.findById({userId})
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