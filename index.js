const express = require("express");
const app = express();
const mongoose = require("mongoose");
 require("./config/mongoose");
mongoose.set("strictQuery", false);
const UserRouter = require("../Ecommers/Routes/user");
app.use(express.json());
const port = process.env.PORT || 4000;
// database()
app.use("/api", UserRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
