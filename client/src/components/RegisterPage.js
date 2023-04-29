/**
 * This file contains the register page that allows users to create a new account
 * by entering their email and password, and then submitting their information to
 * the server for registration.
 */

// Imports - Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/register.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch API Request to register a user
  const handleSubmit = async (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    const postData = async (name, email, password) => {
      const url = "http://localhost:5005/api/v1/auth/register";

      const data = {
        name: name,
        email: email,
        password: password,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        console.log("Submitting form .."); //debug

        if (response.ok) {
          console.log("Success registering");

          setSuccessMessage("User registered successfully!");
          setErrorMessage("");

          // Reset form values to nothing
          setName("");
          setEmail("");
          setPassword("");
        }

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error:", errorData);

          setSuccessMessage("");
          setErrorMessage("Failed to register.");
        }
      } catch {}
    };

    postData(name, email, password);
  };

  return (
    <div className={style.card}>
      <img
        src={imageSource}
        alt="logo"
      />
      <p>Please provide your information below</p>
      {/* Register form component */}
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className={style.registerLabel}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className={style.registerInput}
            type="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.registerLabel}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={style.registerInput}
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.registerLabel}
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className={style.registerInput}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <Link to="/login">
            <button className={style.cancelButton}>
              <p className={style.cancelButtonLabel}>Back</p>
            </button>
          </Link>
          <button
            className={style.registerButton}
            type="submit"
          >
            <p className={style.registerButtonLabel}>Register</p>
          </button>
        </div>
      </form>

      {/* Success message */}
      {successMessage && (
        <div className={style.successMessage}>{successMessage}</div>
      )}
      {/* Error message */}
      {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
}

export default Register;
