// Imports - Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/add.module.css";

function AddProduct() {
  // Defines component variables
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    const postData = async (productName, sku, supplier, price, quantity) => {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5005/api/v1/products";

      const data = {
        productName: productName,
        sku: sku,
        supplier: supplier,
        price: price,
        quantity: quantity,
      };

      try {
        // Fetch request to add a product to remote database
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        console.log("Submitting form .."); // Debug

        if (response.ok) {
          console.log("Success adding product"); // Debug

          setSuccessMessage("Product added successfully!");
          setErrorMessage("");

          // Reset form values to nothing
          setProductName("");
          setSku("");
          setSupplier("");
          setPrice("");
          setQuantity("");
        }

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error:", errorData); // Debug

          setSuccessMessage("");
          setErrorMessage("Failed to add product.");
        }
      } catch {}
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
          <Link to="/products">
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

      {/* Success message */}
      {successMessage && (
        <div className={style.successMessage}>{successMessage}</div>
      )}
      {/* Error message */}
      {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
    </div>
  );
}

export default AddProduct;
