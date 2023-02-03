const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
