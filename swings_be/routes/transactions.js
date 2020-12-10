const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Transaction = require('../models/transaction');
const CartItem = require('../models/cart');
const User = require('../models/user');
const transaction = require('../models/transaction');

router.post('/add-order', (req, res, next) => {
    const transaction = new Transaction({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        order: req.body.order,
        address: req.body.address,
        // paymentType: req.body.paymentType,
        // paymentStatus: req.body.paymentStatus
    });

    transaction.save()
    // .then(transaction => {
    //     CartItem.remove({"user": req.body.user})
    //     .exec()
    //     .then(doc => {
    //         res.status(201).json({
    //             message: order
    //         });
    //     })
    //     .catch(error => {
    //         res.status(500).json({
    //             error: error
    //         });
    //     })
    // })
    // .catch(error => {
    //     res.status(500).json({
    //         error: error
    //     });
    // })
})

router.get('/getTransactions/:userId', (req, res, next) => {
    const userId = req.params.userId;
    Transaction.find({"user": userId})
    .select('address order orderDate status')
    .populate('transaction.product', 'name img')
    .exec()
    .then(orders => {
        User.findOne({"user": userId})
        .exec()
        .then(user => {
            const transactionWithAddress = orders.map(transaction => {
                const address = user.address.find(userAdd => transaction.address.equals(userAdd._id));
                return {
                    _id: transaction._id,
                    order: transaction.order,
                    address: address,
                    Date: transaction.Date,
                }
            });
            res.status(200).json({
                message: transactionWithAddress
            });
        })
        .catch(error => {
            return res.status(500).json({
                error: error
            })
        })
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

router.put('/update/quantity', (req, res, next) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const total = req.body.total;
    CartItem.update({"user": userId, "cart.product": productId}, {
        $set : {
            "cart.$.quantity": quantity,
            "cart.$.total": total
        }
    })
    .exec()
    .then(cartItem => {
        res.status(201).json({
            message: cartItem
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;