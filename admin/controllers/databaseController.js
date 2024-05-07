// controllers/databaseController.js
const Instance = require("../models/Instance");

// Controller function to create a new database
exports.createDatabase = async (req, res) => {
  const { instanceId, dbName } = req.body;

  try {
    // Find the instance by ID
    const instance = await Instance.findById(instanceId);

    // Check if the instance exists
    if (!instance) {
      return res.status(404).json({ msg: "Instance not found" });
    }

    // Check if dbName is a string
    if (typeof dbName !== "string") {
      return res.status(400).json({ msg: "Database name must be a string" });
    }

    // Add the new database name to the instance
    instance.databases.push(dbName);

    // Save the updated instance
    await instance.save();

    // Respond with success message
    res.status(201).json({ msg: "Database created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Remove database
exports.removeDatabase = async (req, res) => {
  const { instanceId } = req.params;
  const { dbName } = req.body;

  try {
    // Find the instance by ID
    const instance = await Instance.findById(instanceId);

    if (!instance) {
      return res.status(404).json({ msg: "Instance not found" });
    }

    // Remove the specified database name from the instance
    const databases = instance.databases;
    const index = databases.indexOf(dbName);
    if (index !== -1) {
      databases.splice(index, 1);
    }

    // Save the updated instance
    await instance.save();

    res.status(200).json({ msg: "Database removed successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
