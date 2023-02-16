const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
  },
  role: {
    type:String,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
