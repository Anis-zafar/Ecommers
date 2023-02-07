const express = require("express");
const { Signup, Login,addproduct} = require("../controllers/user");
const router = express.Router();
const is_valid = require("../middleware/middleware");

router.post("/signup", is_valid, Signup);
router.post("/login", is_valid, Login);
router.post("/addproducts",addproduct);
module.exports = router;
