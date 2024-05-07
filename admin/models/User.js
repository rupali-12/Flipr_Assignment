const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessRole: {
    type: String,
    enum: ["read", "readWrite", "admin"],
    default: "read",
  },
  restrictedDatabases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Database",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
