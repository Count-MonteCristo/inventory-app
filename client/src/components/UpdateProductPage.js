// Imports - Dependencies
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Import - Style
import style from "./componentCSS/update.module.css";

function UpdateProduct(props) {
  // Defines component variables
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("token");
  const url = `http://localhost:5005/api/v1/products/${id}`;

  // Fetches current product data from remote database
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.product); // Debug
        setProduct(data.product);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  // Sends the updated product data to the remote database
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(updatedProduct); // Debug

    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.product); // Debug

        console.log("Success updating product"); // Debug

        setSuccessMessage("Product updated!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error); // Debug

        setSuccessMessage("");
        setErrorMessage("Failed to register.");
      });
  };

  // Update the state variables product and updatedProduct based on user input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setUpdatedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.card}>
      <p className={style.headerText}>Please fill out the fields below</p>
      {/* update product form component */}
      <form onSubmit={handleSubmit}>
        {product && (
          <div>
            <label
              className={style.updateLabel}
              htmlFor="productName"
            >
              Product Name:
            </label>
            <input
              className={style.updateInput}
              type="text"
              id="productName"
              name="productName"
              value={product.productName}
              onChange={handleInputChange}
            />
          </div>
        )}
        {product && (
          <div>
            <label
              className={style.updateLabel}
              htmlFor="sku"
            >
              SKU:
            </label>
            <input
              className={style.updateInput}
              type="text"
              id="sku"
              name="sku"
              value={product.sku}
              onChange={handleInputChange}
            />
          </div>
        )}
        {product && (
          <div>
            <label
              className={style.updateLabel}
              htmlFor="supplier"
            >
              Supplier:
            </label>
            <input
              className={style.updateInput}
              type="text"
              id="supplier"
              name="supplier"
              value={product.supplier}
              onChange={handleInputChange}
            />
          </div>
        )}
        {product && (
          <div>
            <label
              className={style.updateLabel}
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className={style.updateInput}
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>
        )}
        {product && (
          <div>
            <label
              className={style.updateLabel}
              htmlFor="quantity"
            >
              Quantity:
            </label>
            <input
              className={style.updateInput}
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className={style.buttons}>
          <Link to="/products">
            <button className={style.cancelButton}>
              <p className={style.cancelButtonLabel}>Back</p>
            </button>
          </Link>
          <button
            className={style.updateButton}
            type="submit"
          >
            <p className={style.updateButtonLabel}>Update</p>
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

export default UpdateProduct;
