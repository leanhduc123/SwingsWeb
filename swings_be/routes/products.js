const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
//const Category = require('../models/category');
const authenticate = require('../middleware/authenticate');
const { update } = require('../models/product');
const expressAsyncHandler = require('express-async-handler');


router.post('/addProduct', authenticate, (req, res, next) => {
    Product.findOne({"name": req.body.name})
    .exec()
    .then(product => {
        if(product) {
            Product.findOneAndUpdate({"name": req.body.name}, {
                //name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.body.image,
                category: req.body.category,
                discount: req.body.discount,
                updatedAt : Date.now(),
            },{
                new: true
            })
            .then(doc => {
                res.status(201).json({
                    message: doc
                })
            })
        } else {
            const product = new Product({
                _id: new mongoose.Types.ObjectId(), 
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.body.image,
                discount: req.body.discount,
                category: req.body.category
                //createdBy: req.body.createdBy
            });
            product.save()
            .then(product => {
                res.status(201).json({
                    message: product
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                });
            })
        }
    })
});

router.put('/:id', (req, res, next) =>{
    const productId = req.params.id;
    const product = Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.description = req.body.description;
      product.discount = req.body.discount
      const updatedProduct = product.save();
      res.status(201).json({ 
          message: 'Product Updated', 
          product: updatedProduct 
        });
    } else {
        res.status(404).json({ 
            message: 'Product Not Found' 
        });
    }

})

router.get('/', (req, res, next) => {
    Product.find({})
    //.select('_id name price image ')
    .exec()
    .then(products => {
        res.status(200).json({
            message: products
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })
});

// router.get('/category', (req, res, next) => {
//     //const category = req.params.category
//     Product.find().distinct('category')
//     .then(products =>{
//         res.status(200).json({
//             message: products
//         })
//     })
//     .catch(error => {
//         res.status(500).json({
//             error: error
//         });
//     })
// })

router.get('/:id', (req, res, next) => {
    const product = Product.findById({_id:req.params.id})
    .exec()
    if (product) {
        res.status(200).json({
            message: product
        })
    } else {
        res.status(500).json({
            message: 'Not found'
        });
    }
})
router.get('/:delete', (req, res, next) =>{
    const product = Product.findById({_id :req.params._id})
    //.populate('rating',' rating.userId rating.score')
    .exec
    if (product) {
        const deleteProduct = product.remove()
        res.status(200).json({
            message: product,
            product: deleteProduct
        })
    } else {
        res.status(500).json({
            message: 'Not found'
        });
    }
})

router.get('/category', (req, res, next) => {
    const category = req.params.category;
    Product.findOne({category: category})
    .exec()
    .then(category => {
        if(category){
            Product.find({ "category": { $in: categoriesAr } })
            .select('_id name price image category ')
            .exec()
            .then(products => {
                res.status(200).json({
                    message: products
                })
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                })
            })                    
        .catch(error => {})
        }else{
            return res.status(404).json({
                message: 'Not Found'
            })
        }
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    });
});

module.exports = router;