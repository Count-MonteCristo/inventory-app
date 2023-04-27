// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  // Defines component variables
  const productName = "";
  const sku = "";
  const supplier = "";
  const price = "";
  const quantity = "";

  return (
    <div>
      <h1>Add Product</h1>
      {/* Add product form component */}
      <form>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
          />
        </div>
        <div>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            value={sku}
          />
        </div>
        <div>
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            id="supplier"
            value={supplier}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
          />
        </div>
        <Link to="/">
          <button>Back</button>
        </Link>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
