const { check, validationResult, body } = require("express-validator");

// const valid = (req,res,next) => {
//   const is_valid = [
//     check("name")
//       .not()
//       .isEmpty()
//       // .isAlpha()
//       .isLength(3)
//       .withMessage("name required with no spaces"),
//     check("email")
//       .isEmail()
//       .not()
//       .isEmpty()
//       .withMessage("Please enter valid Email address"),
//     check("password")
//       .not()
//       .isEmpty()
//       .isLength(8)
//       .withMessage("password must be 8 characters"),
//   ]
//   next()
// }

const validateSignup = [
  // Validate name
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  // Validate email
  body("email").isEmail().withMessage("Invalid email address"),

  // Validate password
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 6 characters long"),

  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateSignup };
