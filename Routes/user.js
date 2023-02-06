const express = require('express');
const {Signup} = require('../controllers/user');
const router = express.Router()
const is_valid = require('../middleware/middleware')

router.post('/signup',is_valid, Signup);

module.exports = router;




