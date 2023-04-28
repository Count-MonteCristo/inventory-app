// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/home.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

// Test variable for update functionality
const id = 1;

function Home() {
  return (
    <div>
      {/* Navigational bar */}
      <nav className={style.navigation}>
        <div>
          <img
            src={imageSource}
            alt="logo"
          />
        </div>
        <div className={style.logout}>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      {/* Search menu & buttons for options */}
      <div className={style.utilityContainer}>
        <div>
          <input
            className={style.search}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className={style.optionsContainer}>
          <Link to="/add">
            <button className={style.buttons}>Add</button>
          </Link>
          <Link to={`/update/${id}`}>
            <button className={style.buttons}>Edit</button>
          </Link>
          <button className={style.buttons}>Delete</button>
        </div>
      </div>

      {/* Table for data */}
      <div className={style.tableContainer}>
        <table>
          {/* Header */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {/* Test values */}
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Product 1</td>
              <td>SKU1</td>
              <td>Supplier 1</td>
              <td>$10.99</td>
              <td>
                <button className={style.decreaseButton}>-</button>
                <span>50</span>
                <button className={style.increaseButton}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Product 2</td>
              <td>SKU2</td>
              <td>Supplier 2</td>
              <td>$5.99</td>
              <td>
                <button className={style.decreaseButton}>-</button>
                <span>100</span>
                <button className={style.increaseButton}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Product 3</td>
              <td>SKU3</td>
              <td>Supplier 3</td>
              <td>$3.99</td>
              <td>
                <button className={style.decreaseButton}>-</button>
                <span>20</span>
                <button className={style.increaseButton}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
