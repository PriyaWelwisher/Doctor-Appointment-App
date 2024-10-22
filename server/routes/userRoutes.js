const express = require("express");
const { loginController, registerController } = require("../controllers/userController");

//router object
const router = express.Router();

//Routes


// Define your routes
router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;  // Correctly exporting the router


// Login routes (post method)
router.post("/login", loginController);

// register routes (post method)
router.post("/register", registerController);

module.express = router;