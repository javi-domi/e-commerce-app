import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "./product.module.css";

const Product = ({ product }) => {
  const { name, description, price, media } = product;
  return (
    <div className={styles.card}>
      <div className={styles.productImage}>
        <img src={media.source} alt={name} className={styles.image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.cart}>
          <h2>{name}</h2>
          <button>
            <FaCartPlus />
          </button>
        </div>
        <h3>{price.formatted_with_symbol}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Product;
