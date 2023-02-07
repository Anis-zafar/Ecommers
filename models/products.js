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
      // type: String,
      type: Buffer,
      // validate: {
      //   validator: (image) => {
      //     return image.lenght <= 20000000;
      //   },
      //   message: "image must be less than 20MB",
      // },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
