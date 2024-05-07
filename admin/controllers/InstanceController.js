const mongoose = require("mongoose");
const Instance = require("../models/Instance");

// @route   GET /api/instance
// @desc    Get all instances
// @access  Private
module.exports.GetAllInstances = async (req, res) => {
  try {
    const instances = await Instance.find();
    res.json(instances);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST /api/instance
// @desc    Add new instance
// @access  Private
module.exports.addNewInstance = async (req, res) => {
  const { name, host, port, password, users } = req.body;
  try {
    // Convert user IDs to ObjectIds
    const userIds = users.map((userId) =>
      mongoose.Types.ObjectId.createFromHexString(userId)
    );

    const newInstance = new Instance({
      name,
      host,
      port,
      password,
      users: userIds, // Assign the array of ObjectIds to the users field
    });

    await newInstance.save();
    res.json(newInstance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST /api/instance
// @desc    details of instances
// @access  Private
// Route to get details of each MongoDB instance
module.exports.GetInstanceDetails = async (req, res) => {
  const instanceId = req.params.id; // Assuming instanceId is provided in the request params

  try {
    // Retrieve the instance document by ID
    const instance = await Instance.findById(instanceId);

    if (!instance) {
      return res.status(404).json({ msg: "Instance not found" });
    }

    // Prepare response data with instance details
    const instanceDetails = {
      name: instance.name,
      host: instance.host,
      port: instance.port,
      numDatabases: instance.databases.length,
      numUsers: instance.users.length,
    };

    res.status(200).json(instanceDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};