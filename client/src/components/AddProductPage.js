// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/add.module.css";

function AddProduct() {
  // Defines component variables
  const productName = "";
  const sku = "";
  const supplier = "";
  const price = "";
  const quantity = "";

  return (
    <div className={style.card}>
      <p className={style.headerText}>Please fill out the fields below</p>
      {/* Add product form component */}
      <form>
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
            //value={productName}
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
            //value={sku}
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
            //value={supplier}
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
            //value={price}
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
            //value={quantity}
          />
        </div>
        <div className={style.buttons}>
          <Link to="/">
            <button className={style.cancelButton}>
              <p className={style.cancelButtonLabel}>Back</p>
            </button>
          </Link>
          <Link to="/">
            <button
              className={style.addButton}
              type="submit"
            >
              <p className={style.addButtonLabel}>Add</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
