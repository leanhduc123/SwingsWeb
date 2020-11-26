const jwt = require("jsonwebtoken")

const SECRET_KEY = "MY_SECRET_KEY";

module.exports = function(req, res, next){
   const token = req.header('auth-token');
   if(!token) return res.status(401).send("Bạn không thể truy cập vào được")
   try{
       const checkToken = jwt.verify(token, SECRET_KEY)
       req.user = checkToken
       next()
    }
   catch(err){
       res.status(400).send('Token không hợp lệ')
    }
}
