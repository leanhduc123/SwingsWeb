const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

router.get('/', (req, res, next) => {
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

router.post('/login', (req, res, next) => {
    Admin.find({username: req.body.username})
    .exec()
    .then(user => {
        if(user.length <= 0){
            return res.status(500).json({
                message: 'Something went wrong'
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
                                return res.status(200).json({
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
                        res.status(200).json({
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

module.exports = router;