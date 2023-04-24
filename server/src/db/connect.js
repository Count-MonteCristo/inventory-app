/**
 * This file contains the code for connecting to the MongoDB database.
 */

// Import
const mongoose = require("mongoose");

// Connects to a MongoDB database using the provided url
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Exports function
module.exports = connectDB;
