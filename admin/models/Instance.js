// models/Instance.js
const mongoose = require("mongoose");

const InstanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  databases: [
    {
      type: String,
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Instance", InstanceSchema);
