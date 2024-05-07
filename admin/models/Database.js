const mongoose = require("mongoose");

const DatabaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  entries: [
    {
      type: String,
    },
  ],
});

const Database = mongoose.model("Database", DatabaseSchema);

module.exports = Database;
