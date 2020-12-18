const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

router.get('/', (req, res) => {
    Admin.find({})
    .exec()
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });
});

router.post('/login', (req, res) => {
    Admin.find({username: req.body.username})
    .then(user => {
        if(user.length <= 0){
            return res.status(500).json({
                message: 'Đã xảy ra lỗi'
            });
        }else{
            // Load hash from your password DB.
            //const user = user[0];
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                // console.log('err', err);
                // console.log('result', result);     
                if(err){
                    return res.status(500).json({
                        error: 'Đăng nhập thất bại'
                    });
                }else{
                    if(result){
                        // Create token
                        const payload = {
                            userId: user[0]._id,
                            iat:  Math.floor(Date.now() / 1000) - 30,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        }
                        jwt.sign(payload, 'mysecretkey', function(err, token) {              
                            if(err){
                                return res.status(500).json({
                                    error: 'err'
                                });
                            }else{
                                res.status(200).json({
                                    message: 'Đăng nhập thành công',
                                    token: token
                                });
                            }
                            
                        });
                    }else{
                        res.status(500).json({
                            message: 'Đăng nhập thất bại'
                        })
                    }
                }
            });
        }
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    });

});

router.post('/create', (req, res)=>{
    bcrypt.hash("123456", 10, (err, hash) => {
        if(err){
            return res.status(500).json({
                error: 'Đã có lỗi xảy ra'
            });
        }else{
            const admin = new Admin({
                username: "swing",
                password: hash,
            });
            admin.save()
            .then(doc => {
                res.status(201).json({
                    message: admin
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });     
        }
    })
})

router.put('/:username/reset', async (req,res) => {
    const resetPasswod = await User.findOne(req.params.username)
    if (resetPasswod) {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if(err){
                return res.status(500).json({
                    error: 'Đã có lỗi xảy ra'
                });
            }else{
                resetPasswod.password = hash
                await resetPasswod.save()
                .then(resetPasswod => {
                    res.status(201).json({
                        message: resetPasswod
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        error: error
                    })
                })
            }
        })
    }
})

module.exports = router;