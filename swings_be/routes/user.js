const express = require("express");

const user_API = require("../API/User");
const userValidation = require("../middleware/validation/user_validation");

const router = express.Router();

router.get("/login", user_API.getLogin);

router.post("/login", userValidation.login, user_API.postLogin);

router.get("/register", user_API.getRegister);

router.post("/register", userValidation.register, user_API.postRegister);

router.post("/logout", user_API.postLogout);

module.exports = router;
