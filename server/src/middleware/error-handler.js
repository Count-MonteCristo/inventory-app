/**
 * This file handles errors that occur during the request/response
 * cycle and sends an appropriate response to the client
 */

// Import
const { StatusCodes } = require("http-status-codes");

// Defines the error handler middleware function
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // Set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  // Validation error handler
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  // Duplicate error handler
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }

  // Cast error handler
  if (err.name === "CastError") {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

// Exports middleware function
module.exports = errorHandlerMiddleware;
