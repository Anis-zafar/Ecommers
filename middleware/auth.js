const jwt = require('jsonwebtoken')
require("dotenv").config();
const User = require("../models/user");



const auth = async (req, res, next) => {
  try {
    const split = req.headers["authorization"].split(" ");
    const token = split[1];
    const decode = jwt.verify(token, process.env.accesstokenkey);
    const user = await User.findOne({ _id: decode.id });
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

module.exports = auth
