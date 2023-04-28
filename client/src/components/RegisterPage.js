/**
 * This file contains the register page that allows users to create a new account
 * by entering their email and password, and then submitting their information to
 * the server for registration.
 */

// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/register.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

// Defines component variables
const email = "";
const password = "";

function Register() {
  return (
    <div className={style.card}>
      <img
        src={imageSource}
        alt="logo"
      />
      <p>Please provide an email and a passwords</p>
      {/* Register form component */}
      <form>
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
            //value={email}
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
            //value={password}
          />
        </div>
        <div className={style.buttons}>
          <Link to="/login">
            <button className={style.cancelButton}>
              <p className={style.cancelButtonLabel}>Cancel</p>
            </button>
          </Link>
          <Link to="/login">
            <button
              className={style.registerButton}
              type="submit"
            >
              <p className={style.registerButtonLabel}>Register</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
