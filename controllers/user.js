const express = require("express");
const Bcrypt = require("bcryptjs");
const User = require("../models/user");
const { genSalt } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// api

const Signup = async (req, res) => {
  try {
    // const user = new User(req.body);
    const { email, password, name, role } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const salt = await Bcrypt.genSalt(10);
      var hash = await Bcrypt.hash(password, salt);
      const data = await User.findOne({ email });
      if (!data) {
        const user = new User({ email, password: hash, name, role });
        await user.save();
        res.send(user);
      } else {
        return res
          .status(400)
          .send(`User Already exists with same Email: ${email}`);
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const Login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const data = await User.findOne({ email }, { email: 1, password: 1 });
    // console.log(data);
    if (!data) {
      return res.status(404).json({ error: error.array() });
    } else {
      const is_match = await Bcrypt.compare(password, data.password);
      if (is_match) {
        const token = jwt.sign({ id: data._id }, process.env.accesstokenkey, {
          expiresIn: "1h",
        });
        return res.status(200).send(`User logined with token:${data},
        Token:${token}`);
      } else {
        return res.status(400).json({ message: "Wrong credentials" });
      }
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const getuser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.stauts(404).send("in valid id");
  }
  try {
    const data = await User.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

const users = async (req, res) => {
  try {
    const data = await User.find();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};


const forgetpassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user)
    {
      return res.status(404).send({error:'user not found'})
    }
      //generate a reset token 
      









  } catch (error) {

  }
}

module.exports = { Signup, Login, getuser, users };
