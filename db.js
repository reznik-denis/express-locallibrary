const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://reznikdenis:d2obvD5AXJHWCUyP@cluster0.tsbd3px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

module.exports = connectDB;
