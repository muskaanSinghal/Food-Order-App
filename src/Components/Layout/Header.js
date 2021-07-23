import React from "react";
import image from "../assets/biryani1.jpg";
import styles from "./Header.module.css";
import CartButton from "./CartButton";
const Header = function () {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div>REACT MEALS</div>
        <CartButton></CartButton>
      </header>

      <div className={styles.mainImage}>
        <img
          src={image}
          alt="a dish"
          title="some tasty dishes"
          className={styles.image}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
