const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const { route } = require('./admins');
//const Category = require('../models/category');
var count_rate = 0;

router.get('/category/:category', async (req, res, next) =>{
    const category = req.params.category;
    const products = await Product.find({category:category})
    if (products) {
        res.status(201).json({
            message: products
        })
    } else {
        res.status(404).json({
            message: 'Not found'
        })
    }
})
router.get('/subcategory/:subcategory', async (req, res, next) =>{
    const subcategory = req.params.subcategory;
    const products = await Product.find({subcategory: subcategory})
    if (products) {
        res.status(201).json({
            message: products
        })
    } else {
        res.status(404).json({
            message: 'Not found'
        })
    }
})
router.get('/:name', async (req, res,next) => {
    const searchKeyword = req.query.searchKeyword
      ? {
          name: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {};
    // const sortOrder = req.query.sortOrder
    //   ? req.query.sortOrder === 'lowest'
    //     ? { price: 1 }
    //     : { price: -1 }
    //   : { _id: -1 };
    const products = await Product.find({...searchKeyword })
    //.sort(sortOrder);
    res.status(201).json({
        message: products
    })
});

router.get('/allProduct', async (req, res, next) => {
    const products = await Product.find()
    if (products){
        res.status(201).json({
            message: products
        })
    } else {
        res.status(500).json({
            error: error
        })

    }
})

  
router.post('/addProduct', async (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(), 
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        discount: req.body.discount,
        category: req.body.category,
        subcategory: req.body.subcategory,
        size: req.body.size
        //createdBy: req.body.createdBy
    });
    await product.save()
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
});

router.put('/:id',  async (req, res, next) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name
      product.price = req.body.price
      product.image = req.body.image
      product.category = req.body.category
      product.description = req.body.description
      product.discount = req.body.discount
      product.subcategory = req.body.subcategory
      product.size = req.body.size
      product.updatedAt = Date.now()
      const updatedProduct = await product.save();
      res.status(201).json({ 
          message: updatedProduct 
        });
    } else {
        res.status(404).json({ 
            message: 'Not Found' 
        });
    }

})

router.post('/:id/rating', async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        product.rating = req.body.rating
        const updatedProduct = await product.save()
        res.status(201).json({
            message: updatedProduct
        })
    } else {
        res.status(500).json({
            message: 'Not Found'
        })
    }
})

router.get('/:id',async (req, res, next) => {
    const product = await Product.findOne({_id:req.params.id})
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

router.delete('/:id',  async (req, res, next) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) { 
        await deletedProduct.remove()
        res.status(201).json({ 
            message: 'Xóa sản phẩm thành công' 
            
        });
    } else {
        res.send('Error in Deletion.');
    }
});
  


module.exports = router;