const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: Buffer,
    },
    user_id: {
      type:String
    }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
