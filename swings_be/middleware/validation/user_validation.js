const { check, body } = require("express-validator/check");

const User = require("../../models/users");
exports.login = [
  body("email")
    .isEmail()
    .withMessage("Vui lòng nhập email")
    .normalizeEmail(),
  body("password", "Vui lòng nhập password")
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim()
];

exports.register = [
  check("email")
    .isEmail()
    .withMessage("Email không hợp lệ")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject(
            "Email đã tồn tại"
          );
        }
      });
    })
    .normalizeEmail(),
  body(
    "password",
    "Password có độ dài ít nhất 5 ký tự"
  )
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim(),
  body("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Mật khẩu không phù hợp ");
      }
      return true;
    })
];
