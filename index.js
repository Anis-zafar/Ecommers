const express = require("express");
const app = express();
const UserRouter = require("../Ecommers/Routes/user");
app.use(express.json());
const port = process.env.PORT || 4000;

app.use("/api", UserRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
