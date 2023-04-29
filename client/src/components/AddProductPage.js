// Imports - Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// Import - Style
import style from "./componentCSS/add.module.css";

function AddProduct() {
  // Defines component variables
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    console.log(productName, sku, supplier, price, quantity);
    console.log(token);

    /*const data2 = await fetch("http://localhost:5005/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productName, sku, supplier, price, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); //debug
      })
      .catch((error) => {
        console.log("something went wrong"); //debug

        // Handle error
        console.error(error);
      });
      */

    /*
    const postData = async (arg1, arg2, arg3, arg4, arg5) => {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5005/api/v1/products";

      const data = {
        productName: arg1,
        sku: arg2,
        supplier: arg3,
        price: arg4,
        quantity: arg5,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error:", errorData);
        }
      } catch {}
    };

    postData(productName, sku, supplier, price, quantity);
    */

    const postData = async (arg1, arg2, arg3, arg4, arg5) => {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5005/api/v1/products";

      const data = {
        productName: arg1,
        sku: arg2,
        supplier: arg3,
        price: arg4,
        quantity: arg5,
      };

      try {
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        const responseData = response.data;
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    postData(productName, sku, supplier, price, quantity);
  };

  return (
    <div className={style.card}>
      <p className={style.headerText}>Please fill out the fields below</p>
      {/* Add product form component */}
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className={style.addLabel}
            htmlFor="productName"
          >
            Product Name:
          </label>
          <input
            className={style.addInput}
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.addLabel}
            htmlFor="sku"
          >
            SKU:
          </label>
          <input
            className={style.addInput}
            type="text"
            id="sku"
            value={sku}
            onChange={(event) => setSku(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.addLabel}
            htmlFor="supplier"
          >
            Supplier:
          </label>
          <input
            className={style.addInput}
            type="text"
            id="supplier"
            value={supplier}
            onChange={(event) => setSupplier(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.addLabel}
            htmlFor="price"
          >
            Price:
          </label>
          <input
            className={style.addInput}
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label
            className={style.addLabel}
            htmlFor="quantity"
          >
            Quantity:
          </label>
          <input
            className={style.addInput}
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <Link to="/">
            <button className={style.cancelButton}>
              <p className={style.cancelButtonLabel}>Back</p>
            </button>
          </Link>
          <button
            className={style.addButton}
            type="submit"
          >
            <p className={style.addButtonLabel}>Add</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
