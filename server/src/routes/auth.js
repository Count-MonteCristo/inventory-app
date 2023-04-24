/**
 * This file defines authentication routes, including registering a new user,
 * logging in, and logging out.
 */

// Imports
const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");

// Routes for user authentication
router.post("/register", register);
router.post("/login", login);

// Exports router
module.exports = router;
