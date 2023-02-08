const express = require("express");
const { Signup, Login, getuser, users } = require("../controllers/user");
const { addproduct, addimage, getproduct } = require("../controllers/products");
const router = express.Router();
const { is_valid, auth } = require("../middleware/middleware");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/signup", is_valid, Signup);
router.post("/login", is_valid, Login);
router.post("/addproducts", upload.single("image"), addproduct);
// router.post("/addimage/:id", addimage)
router.get("/getproduct/:id", auth,getproduct);
router.get("/getuser/:id", getuser);
router.get("/users",auth,users)
module.exports = router;
