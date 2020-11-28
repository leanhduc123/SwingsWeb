const express = require("express");

const product_API = require("../API/Product");
const is_Auth = require("../middleware/auth/is_auth");

const router = express.Router();

//router.get("/", product_API.getIndex);

router.get("/products", product_API.getProducts);

router.get("/products/:productId", product_API.getProduct);

router.get("/cart", is_Auth, product_API.getCart);

router.post("/cart", is_Auth, product_API.postCart);

router.post("/cart-delete-item", is_Auth, product_API.postCartDeleteProduct);

router.post("/create-order", is_Auth, product_API.postOrder);

router.get("/orders", is_Auth, product_API.getOrders);

module.exports = router;
