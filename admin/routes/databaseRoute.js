// routes/databaseRoutes.js
const express = require("express");
const router = express.Router();
const {
  createDatabase,
  removeDatabase,
} = require("../controllers/databaseController");

// Route to create a new database
router.post("/create", createDatabase);
router.post("/remove/:instanceId", removeDatabase);

module.exports = router;
