import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.logo}>Ropa</h1>
      <div className={styles.shoppingCart}>
        <FaShoppingCart />
        <span className={styles.counter}>1</span>
      </div>
    </div>
  );
};

export default NavBar;
