// userRoutes.js
const express = require("express");
const router = express.Router();
const {
  createUser,
  changePassword,
  removeUser,
} = require("../controllers/userController");

// Create a new user
router.post("/create", createUser);
router.put("/:userId", changePassword);

router.delete("/:userId", removeUser);

module.exports = router;
