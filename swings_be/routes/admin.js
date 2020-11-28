const express = require("express");

const admin_API = require("../API/Admin");
const adminValidation = require("../middleware/validation/admin_validation");
const is_Auth = require("../middleware/auth/is_auth");

const router = express.Router();

router.get("/products", is_Auth, admin_API.getProducts);

router.get("/add-product", is_Auth, admin_API.getAddProduct);

router.post(
  "/add-product",
  adminValidation.addProduct,
  is_Auth,
  admin_API.postAddProduct
);

router.get("/edit-product/:productId", is_Auth, admin_API.getEditProduct);

router.post(
  "/edit-product",
  adminValidation.editProduct,
  is_Auth,
  admin_API.postEditProduct
);

router.delete("/product/:productId", is_Auth, admin_API.deleteProduct);

module.exports = router;
