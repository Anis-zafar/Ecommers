const express = require("express");
const Bcrypt = require("bcryptjs");
const User = require("../models/user");
const { genSalt } = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Signup = async (req, res) => {
  try {
    const user = new User(req.body);
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else {
      const salt = await Bcrypt.genSalt(10);
      var hash = await Bcrypt.hash(user.password, salt);
      user.password = hash
      // await user.save();
      res.send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// const Login = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// };

module.exports = { Signup };
