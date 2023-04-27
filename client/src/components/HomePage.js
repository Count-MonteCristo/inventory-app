// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

function Home() {
  return (
    <div>
      {/* Navigational bar */}
      <nav>
        <div>
          <img
            src={imageSource}
            alt="logo"
          />
        </div>
        <div>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      {/* Search menu & buttons for options */}
      <div>
        <input
          type="text"
          placeholder="Search"
        />
        <div>
          <Link to="/add">
            <button>Add</button>
          </Link>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      {/* Table for data */}
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
            <td>50</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Product 2</td>
            <td>SKU2</td>
            <td>Supplier 2</td>
            <td>$5.99</td>
            <td>100</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Product 3</td>
            <td>SKU3</td>
            <td>Supplier 3</td>
            <td>$3.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
