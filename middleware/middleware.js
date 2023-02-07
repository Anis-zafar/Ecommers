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


const auth = async (req, res, next) => {
  try {
    const split = req.headers["authorization"].split(" ");
    const token = split[1];
    const decode = jwt.verify(token, process.env.AccessWebToken);
    const user = await User.findOne({ _id: decode.id});
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json("please authenticate proper");
  }
};

module.exports = is_valid,auth;
