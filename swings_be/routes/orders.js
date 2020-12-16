const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
//const CartItem = require('../models/cartItem');
//const Profile = require('../models/profile');


router.post('/order', async (req, res, next) => {
    const order = new Order({
        id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        phone: req.body.user,
        address: req.body.address,
        email: req.body.email,
        order: req.body.order,
        total: req.body.total,
        isOrderCompleted: false
    });
    await order.save()
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

router.get("/",async (req, res, next) => {
    const orders = await Order.find({}).populate('user');
    res.status(201).json({
        message: orders
    });
});


router.get("/me",async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(201).json({
        message: orders
    });
});

router.get('/:id',(req, res, next) => {
      const order = Order.findById(req.params.id);
      if (order) {
        res.status(201).json({
            message:order
        })
      } else {
        res.status(404).send({ message: 'Not found' });
      }
    }
)

router.delete("/:id", async (req, res) => {
    const order = Order.findOne({ _id: req.params.id });
    if (order) {
        const deletedOrder = order.remove();
        res.status(201).json({
            message: deletedOrder
        })
    } else {
      res.status(404).send("Not found")
    }
  });

router.put('/:id', async (req, res, next) => {
    const orderId = req.params.id
    const orders = Order.findById({_id:orderId})
    if (orders){
        orders.order = req.body.order;
        orders.address = req.body.address
        const updateOrders = await Order.save()
        res.status(201).json({
            message: updateOrders
        })
    } else {
        res.status(201).json({
            message: 'Not Found'
        })
    }

});

module.exports = router;