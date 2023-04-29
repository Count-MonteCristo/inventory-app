/**
 * This file contains the login page that allows users to enter their email and password
 * to authenticate and access secure parts of the application.
 */

// Imports - Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import - Style
import style from "./componentCSS/login.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fetch API Request to login a user
  const handleSubmit = (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success"); //debug

        // save token to local storage
        localStorage.setItem("token", data.token);

        // Sends user to the products page
        navigate("/");
      })
      .catch((error) => {
        console.log("something went wrong"); //debug

        // Handle error
        console.error(error);
      });

    console.log("Submitting form..."); //debug
  };

  return (
    <div className={style.card}>
      <img
        src={imageSource}
        alt="logo"
      />
      <p>Please login with your admin credentials</p>
      {/* Login form component */}
      <form onSubmit={handleSubmit}>
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className={style.loginButton}
          type="submit"
        >
          <p className={style.loginButtonLabel}>Login</p>
        </button>
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
