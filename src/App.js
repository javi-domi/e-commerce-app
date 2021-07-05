import React from "react";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
};

export default App;
