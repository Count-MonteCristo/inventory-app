/**
 * This file contains the login page that allows users to enter their email and password
 * to authenticate and access secure parts of the application.
 */

// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/login.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

function Login() {
  // Defines component variables
  const email = "";
  const password = "";

  return (
    <div className={style.card}>
      <img
        src={imageSource}
        alt="logo"
      />
      <p>Please login with your admin credentials</p>
      {/* Login form component */}
      <form>
        <div>
          <label
            className={style.loginLabel}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={style.loginInput}
            type="email"
            id="email"
            //value={email}
          />
        </div>
        <div>
          <label
            className={style.loginLabel}
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className={style.loginInput}
            type="password"
            id="password"
            //value={password}
          />
        </div>
        <Link to="/">
          <button
            className={style.loginButton}
            type="submit"
          >
            <p className={style.loginButtonLabel}>Login</p>
          </button>
        </Link>
      </form>
      <div>
        <p className={style.registerPrompt}>
          Don't have an account?
          <Link
            className={style.registerLink}
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
