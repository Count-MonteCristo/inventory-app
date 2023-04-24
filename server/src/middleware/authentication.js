/**
 * This file verifies the identity of a user and restricts
 * access to product routes if the user is not authorized.
 */

// Imports
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

// Middleware function that authenticates requests by verifying the JWT token sent in the Authorization header
const auth = async (req, res, next) => {
  // Checks header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  // Extracts the token from the header by splitting the header string
  const token = authHeader.split(" ")[1];

  // Verifies the token
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attaches the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = auth;
