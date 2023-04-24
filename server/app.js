/**
 * This file creates and configures the Express application,
 * including setting up middleware, routes, and error handling.
 */

require("dotenv").config();
require("express-async-errors");

// Imports and initializes an express application
const express = require("express");
const app = express();

// Imports connectDB
const connectDB = require("./src/db/connect");

// Imports middleware
const authenticateUser = require("./src/middleware/authentication");
const errorHandlerMiddleware = require("./src/middleware/error-handler");
const notFoundMiddleware = require("./src/middleware/not-found");

// Parses JSON payload into a JavaScript object
app.use(express.json());

// Security
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  })
);

// Routers
const authRouter = require("./src/routes/auth");
const productsRouter = require("./src/routes/product");

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", authenticateUser, productsRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// Sets up the port number for the Express application to listen on
const port = process.env.PORT || 3000;

// Starts the Express application by establising a connection to a MongoDB database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
