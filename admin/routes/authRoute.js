// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { Signup, Login } = require("../controllers/userController");

// @route   POST /api/auth/signup
// @desc    Signup
// @access  Public
router.post("/signup", Signup);

// @route   POST /api/auth/login
// @desc    Login
// @access  Public
router.post("/login", Login);

module.exports = router;
