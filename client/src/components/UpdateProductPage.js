// Imports - Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import - Style
import style from "./componentCSS/update.module.css";

function updateProduct() {
  // Defines component variables
  const productName = "";
  const sku = "";
  const supplier = "";
  const price = "";
  const quantity = "";

  return (
    <div className={style.card}>
      <p className={style.headerText}>Please fill out the fields below</p>
      {/* update product form component */}
      <form>
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
            //value={productName}
          />
        </div>
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
            //value={sku}
          />
        </div>
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
            //value={supplier}
          />
        </div>
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
            //value={price}
          />
        </div>
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
              className={style.updateButton}
              type="submit"
            >
              <p className={style.updateButtonLabel}>Update</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default updateProduct;
