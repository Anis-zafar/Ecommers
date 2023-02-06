const { body, validatorResult, check } = require("express-validator");
const User = require("../models/user");

const is_valid = [
  check("name")
    .not()
    .isEmpty()
    // .isAlpha()
    .isLength(3)
    .withMessage("name required with no spaces"),
  check("email")
    .isEmail()
    .not()
    .isEmpty()
    .withMessage("Please enter valid Email address"),
  check("password")
    .not()
    .isEmpty()
    .isLength(8)
    .withMessage("password must be 8 characters"),
];
// body("email").isEmail().notEmpty(),
//   body("password").notEmpty().isLength({ min: 8 }),
//   body("name").notEmpty();

module.exports = is_valid;
