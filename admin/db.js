const mongoose = require("mongoose");
const dotenv = require("dotenv");
 
dotenv.config({ path: "../.env" });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // New options
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
