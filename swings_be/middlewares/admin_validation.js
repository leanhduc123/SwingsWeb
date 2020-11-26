const Joi = require('@hapi/joi')

// Add product
const addProduct = function(data) {
    const schema = Joi.object ({
        productName: Joi.string()
                    .min (3)
                    .required(),
        price: Joi.number()
               .required(),
    })
}

// Edit product
const editProduct = function(data) {
    const schema = Joi.object ({
        productName: Joi.string()
                    .min (3)
                    .required(),
        price: Joi.number()
               .required(),
    })
}