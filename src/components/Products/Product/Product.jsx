import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "./product.module.css";

const Product = ({ product }) => {
  const { name, description, price, image } = product;
  return (
    <div className={styles.card}>
      <div className={styles.productImage}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.cart}>
          <h2>{name}</h2>
          <button>
            <FaCartPlus />
          </button>
        </div>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
