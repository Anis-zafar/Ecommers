const express = require("express");

const User = require("../models/user");

const Signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { Signup };
