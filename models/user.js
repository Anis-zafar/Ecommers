const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: Number,
    required: true,
  },
  Cart: {
    type: Buffer,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
