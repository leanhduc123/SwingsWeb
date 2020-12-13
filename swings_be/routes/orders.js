const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
//const CartItem = require('../models/cartItem');
const Profile = require('../models/profile');
const expressAsyncHandler = require('express-async-handler');

router.post('/order', (req, res, next) => {
    const order = new Order({
        id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        order: req.body.order,
        address: req.body.address,
        total: req.body.total
    });
    order.save()
    .then(order => {
        res.status(201).json({
            message: order
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
})

router.get('/getorders/:userId', (req, res, next) => {
    const userId = req.params.userId;
    Order.find({"user": userId})
    .select('address order orderDate isOrderCompleted')
    .populate('order.product', 'name image')
    .exec()
    .then(orders => {
        Profile.findOne({"user": userId})
        .exec()
        .then(profile => {
            const orderWithAddress = orders.map(order => {
                const address = profile.address.find(userAdd => order.address.equals(userAdd._id));
                return {
                    _id: order._id,
                    order: order.order,
                    address: address,
                    orderDate: order.orderDate,
                    isOrderComleted: order.isOrderComleted
                }
            });
            res.status(200).json({
                message: orderWithAddress
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

router.get('/:id',(req, res, next) => {
      const order = Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    }
)

router.put('/updateOder', (req, res, next) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const total = req.body.total;
    Order.update({"user": userId, "order.product": productId}, {
        $set : {
            "oder.$.quantity": quantity,
            "order.$.total": total
        }
    })
    .exec()
    .then(order => {
        res.status(201).json({
            message: order
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    });

});

module.exports = router;