const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const database = async () => {
  try {
    mongoose.connect(process.env.MongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: false,
    });
    console.log("Sucessfully Connected to DATABASE on localhost");
  } catch (error) {
    console.log("error");
  }
};

database();
