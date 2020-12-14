const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
//const CartItem = require('../models/cartItem');
//const Profile = require('../models/profile');
const authenticate = require('../middleware/authenticate');

router.post('/order', authenticate, async (req, res, next) => {
    const order = new Order({
        id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        order: req.body.order,
        total: req.body.total
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

router.get("/", authenticate,async (req, res, next) => {
    const orders = await Order.find({}).populate('user');
    res.status(201).json({
        message: orders
    });
});


router.get("/me", authenticate,async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(201).json({
        message: orders
    });
});

// router.get('/getorders/:userId', (req, res, next) => {
//     const userId = req.params.userId;
    
//     Order.find({"user": userId})
//     .select('address order orderDate isOrderCompleted')
//     .populate('order.product', 'name image')
//     .exec()
//     .then(orders => {
//         Profile.findOne({"user": userId})
//         .exec()
//         .then(profile => {
//             const orderWithAddress = orders.map(order => {
//                 const address = profile.address.find(userAdd => order.address.equals(userAdd._id));
//                 return {
//                     _id: order._id,
//                     order: order.order,
//                     address: address,
//                     orderDate: order.orderDate,
//                     isOrderComleted: order.isOrderComleted
//                 }
//             });
//             res.status(200).json({
//                 message: orderWithAddress
//             });
//         })
//         .catch(error => {
//             return res.status(500).json({
//                 error: error
//             })
//         })

        
//     })
//     .catch(error => {
//         res.status(500).json({
//             error: error
//         });
//     });

// });

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

router.delete("/:id", authenticate, async (req, res) => {
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

router.put('/:id', (req, res, next) => {
    const userId = req.body.userId;
    const order = req.body.orer;
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