const express = require("express");
const { Signup, Login, getuser, users } = require("../controllers/user");
const { addproduct, addimage, getproduct } = require("../controllers/products");
const router = express.Router();
const { validateSignup } = require("../middleware/vaildation");
const auth = require("../middleware/auth");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/signup", validateSignup, Signup);
router.post("/login", Login);
router.post("/addproducts", upload.single("image"), addproduct);
// router.post("/addimage/:id", addimage)
router.get("/getproduct/:id", auth, getproduct);
router.get("/getuser/:id", getuser);
router.get("/users", auth, users);
module.exports = router;
