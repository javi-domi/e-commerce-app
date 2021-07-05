import React from "react";
import Product from "./Product/Product";
import styles from "./products.module.css";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$259",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple computer",
    price: "$1,999",
    image:
      "https://macmagazine.com.br/wp-content/uploads/2020/12/01-macbook-pro-m1-scaled.jpg",
  },
  {
    id: 3,
    name: "TV",
    description: "LG Television",
    price: "$1,200",
    image: "https://i.zst.com.br/thumbs/12/21/35/932137755.jpg",
  },
];

const Products = () => {
  return (
    <main>
      {products.map((product) => (
        <div item key={product.id} className={styles.cardProduto}>
          <Product product={product} />
        </div>
      ))}
    </main>
  );
};
export default Products;
