const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");



/**
 * descrption: Route for user registration
 * method: POST
 * access: Public
 * endpoint: /api/auth/register
 */
router.post("/register", registerUser);

/**
 * descrption: Route for user login
 * method: POST
 * access: Public
 * endpoint: /api/auth/login
 */
router.post("/login", loginUser);

module.exports = router;
 