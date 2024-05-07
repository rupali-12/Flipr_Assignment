const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const InstanceRoute = require("./routes/InstanceRoute");
const databaseRoute = require("./routes/databaseRoute");

// const result = dotenv.config({ path: "../.env" });
dotenv.config({ path: "../.env" });

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// mongodB
connectDB();

// Routes
app.use("/api/auth", authRoute);
app.use("/api/database", databaseRoute);
app.use("/api/users", userRoute);
app.use("/api/instance", InstanceRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
