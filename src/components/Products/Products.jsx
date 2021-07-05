import React from "react";
import Product from "./Product/Product";
import styles from "./products.module.css";

const Products = ({ products }) => {
  return (
    <main>
      {products.map((product) => (
        <div key={product.id} className={styles.cardProduto}>
          <Product product={product} />
        </div>
      ))}
    </main>
  );
};
export default Products;
