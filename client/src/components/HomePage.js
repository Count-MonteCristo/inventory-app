// Imports - Dependencies
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import - Style
import style from "./componentCSS/home.module.css";

// Import - Creative Assets
import imageSource from "../creative/Inventorio.png";

function Home() {
  // Defines component variables
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Sets the token variable and url for the Fetch API requests
  const token = localStorage.getItem("token");
  const url = "http://localhost:5005/api/v1/products";

  // Fetches the product list from the remote database
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  // Deletes the product from database
  const handleDelete = (_id) => {
    fetch(`${url}/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filters out the deleted product from the products array
        const updatedProducts = products.filter(
          (product) => product._id !== _id
        );

        console.log("Products has been filtered"); // Debug
        console.log(updatedProducts); // Debug

        // Sets the new state with the updated products array
        setProducts(updatedProducts);
        console.log("Products list has been set without the deleted product"); // Debug
        console.log(products); // Debug
      })
      .catch((error) => console.error(error));
  };

  // Logs the user out
  const handleLogout = () => {
    localStorage.removeItem("token");

    // Sends user to the login page
    navigate("/");
  };

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
        <div>
          <button
            className={style.logout}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Search menu & add new product button*/}
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
            <button className={style.buttonADD}>Add New Product</button>
          </Link>
        </div>
      </div>

      {/* Table for data */}
      <div className={style.tableContainer}>
        <table>
          {/* Header */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>{product.sku}</td>
                <td>{product.supplier}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <span>{product.quantity}</span>
                </td>
                <td>
                  <Link to={`/update/${product._id}`}>
                    <button className={style.actionButtons}>Edit</button>
                  </Link>
                  <button
                    className={style.actionButtons}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
