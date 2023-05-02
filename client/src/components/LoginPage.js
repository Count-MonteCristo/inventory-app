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
  // Defines component variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    const postData = async (email, password) => {
      const baseURL = "https://inventory-app-api-lwiy.onrender.com/api/v1";

      const data = {
        email: email,
        password: password,
      };

      try {
        // Fetch request to send credentials to remote database for authentication
        const response = await fetch(`${baseURL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        console.log("Submitting form .."); // Debug

        if (response.ok) {
          console.log("Success loggin in");

          // Extracts token from response and saves it to local storage
          const responseData = await response.json();
          localStorage.setItem("token", responseData.token);

          // Sends user to the products page
          navigate("/products");
        }

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error:", errorData); // Debug

          setErrorMessage("Failed to log in.");
        }
      } catch {}
    };

    postData(email, password);
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

      {/* Error message */}
      {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}

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
