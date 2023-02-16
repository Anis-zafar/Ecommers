const express = require("express");
const {
  Signup,
  Login,
  getuser,
  users,
  addproducttocart,
  removeproduct,
} = require("../controllers/user");
const {
  addproduct,
  addimage,
  getproduct,
  products,
} = require("../controllers/products");
const router = express.Router();
const { validateSignup } = require("../middleware/vaildation");
const auth = require("../middleware/auth");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/signup", validateSignup, Signup);
router.post("/login", Login);
router.post("/addproducts", upload.single("image"), addproduct);
router.post("/addimage", addimage);
router.get("/getproduct/:id", auth, getproduct);
router.get("/getuser/:id", getuser);
router.get("/users", auth, users);
router.post("/addproductsbyuser/:id", auth, addproducttocart);
router.get("/products", products);
router.delete("/removeprod/:id", auth, removeproduct);
module.exports = router;
