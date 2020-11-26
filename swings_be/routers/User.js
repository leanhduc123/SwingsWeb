const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const {registerValidation, loginValidation} = require("../middlewares/user_validation")
const verify = require("../middlewares/checkToken")

const SECRET_KEY = "MY_SECRET_KEY";


router.post('/register', async function(req, res){
    // Validate user
    const{ error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // Kiểm tra username có tồn tại hay không
    const UserNameExist = await User.findOne({username: req.body.username});
    if(UserNameExist) return res.status(400).send("User name đã tồn tại")

    // Kiểm tra email có tồn tại hay không
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email đã tồn tại")

    // Mã hóa password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)

    // Tạo user
    const newuser = new User();
    newuser.username = req.body.username
    newuser.email = req.body.email
    newuser.password = hashPass

    try{
        const User = await newuser.save()
        res.send(User);
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.post('/login', async function(req, res){
    // Validate user
    const{ error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // Kiểm tra email
    const userLogin = await User.findOne({email: req.body.email});
    if(!userLogin) return res.status(400).send("Không tìm thấy email") 

    // Kiểm tra password
    const passLogin = await bcrypt.compare(req.body.password, userLogin.password);
    if(!passLogin) return res.status(400).send("Mật khẩu không hợp lệ")

    // Ký và tạo token
    const token = jwt.sign({_id: userLogin._id}, SECRET_KEY)
    res.header("auth-token", token).send(token);
    res.send("Bạn đã đăng nhập thành công")
})

router.get('/', verify, function(req, res){
    res.send("Swings")
})

module.exports = router;