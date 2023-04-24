/**
 * This file contains functions that handle user authentication,
 * such as registering a new user, logging in, and logging out.
 */

// Imports
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

// Creates a new user and generates a JWT token
const register = async (req, res) => {
  // Validates with moongoose
  const user = await User.create({ ...req.body });

  // Generates token
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token });
};

// Attempts to login user with provided email and password
const login = async (req, res) => {
  const { email, password } = req.body;

  // Checks if email and password are provided
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // Checks if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // Checks if password is correct
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // Generates token
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

// Exports functions
module.exports = {
  register,
  login,
};
