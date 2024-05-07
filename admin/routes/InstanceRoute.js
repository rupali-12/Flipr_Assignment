// routes/instance.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Instance = require("../models/Instance");
const {
  GetAllInstances,
  addNewInstance,
  GetInstanceDetails,
} = require("../controllers/InstanceController");

router.get("/", GetAllInstances);
router.post("/add", addNewInstance);
// Route to get details of each MongoDB instance
router.get("/details/:id", GetInstanceDetails);
// router.get("/", authMiddleware, GetAllInstances);
// router.post("/add", authMiddleware, addNewInstance);
// // Route to get details of each MongoDB instance
// router.get("/instances/details", authMiddleware, GetInstanceDetails);

module.exports = router;
