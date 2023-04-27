/**
 * This file contains the login page that allows users to enter their email and password
 * to authenticate and access secure parts of the application.
 */

// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  // Defines component variables
  const email = "";
  const password = "";

  return (
    <div>
      <h1>Login</h1>
      {/* Login form component */}
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
