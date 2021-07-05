import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";

import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <NavBar />
      <h1>Our Products</h1>
      <Products products={products} />
    </div>
  );
};

export default App;
