/**
 * This file contains functions that handle CRUD operations for products,
 * such as creating a new product, retrieving all products, updating a product,
 * and deleting a product.
 */

// Imports
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// Retrieves a list of products from the database that were created by the logged in user
const getAllProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.userId }).sort(
    "CreatedAt"
  );
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

// Retrieves a single product from the database that matches the specified productId and was created by the logged in user
const getProduct = async (req, res) => {
  const {
    user: { userId },
    params: { id: productId },
  } = req;

  const product = await Product.findOne({
    _id: productId,
    createdBy: userId,
  });
  if (!product) {
    throw new NotFoundError(`No product with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

// Creates a new product in the database using the Product model
const createProduct = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
};

// Attempts to update a product in the database using the Product model and findOneAndUpdate method
const updateProduct = async (req, res) => {
  const {
    body: { name, sku, supplier, price, quantity },
    user: { userId },
    params: { id: productId },
  } = req;

  if (
    name === "" ||
    sku === "" ||
    supplier === "" ||
    price === "" ||
    quantity === ""
  ) {
    throw new BadRequestError("Fields cannot be empty");
  }

  const product = await Product.findOneAndUpdate(
    { _id: productId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!product) {
    throw new NotFoundError(`No product with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

// Delete a specific product by ID.
const deleteProduct = async (req, res) => {
  const {
    user: { userId },
    params: { id: productId },
  } = req;

  const product = await Product.findOneAndRemove({
    _id: productId,
    createdBy: userId,
  });

  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ msg: "The product has been deleted." });
};

// Exports the various functions defined in the module
module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
