const mongoose = require("mongoose");

const new_schema = new mongoose.Schema({
  user_id: {
    type: Array,
  },
  product_id: {
    type: Array,
  },
});

const orders = mongoose.model("order", new_schema);
module.exports = orders;
