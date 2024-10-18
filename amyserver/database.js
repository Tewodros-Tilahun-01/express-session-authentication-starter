const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, {});
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

// Export the connection

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.connection.Schema({
  username: String,
  hash: String,
  salt: String,
  admin: Boolean,
});

const User = mongoose.connection.model("User", UserSchema);

// Expose the connection
// module.exports = connection;
module.exports = { connectDB, mongooseConnection: mongoose.connection };
