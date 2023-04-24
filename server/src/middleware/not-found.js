/**
 * This file handles requests for routes that do not exist
 * in the server by returning a "404 Not Found" error to the client
 */

// Defines the not found middleware function
const notFound = (req, res) => res.status(404).send("Route does not exist");

// Exports middleware function
module.exports = notFound;
