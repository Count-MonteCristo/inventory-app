/**
 * This file contains the register page that allows users to create a new account
 * by entering their email and password, and then submitting their information to
 * the server for registration.
 */

// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Defines component variables
const email = "";
const password = "";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      {/* Register form component */}
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
          />
        </div>
        <Link to="/login">
          <button>Back</button>
        </Link>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
