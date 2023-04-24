/**
 * This file defines the Product model for the database,
 * including the schema and methods.
 */

// Import
const mongoose = require("mongoose");

// Product schema definition
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

// Exports Product model
module.exports = mongoose.model("Product", ProductSchema);
