/**
 * This file defines the product routes, including retrieving all products,
 * creating a new product, updating a product, and deleting a product.
 */

// Imports
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// Sets up a router for handling HTTP requests related to products
router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updateProduct);

// Exports router
module.exports = router;
