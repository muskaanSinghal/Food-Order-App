import React from "react";
import styles from "./CartItem.module.css";
const CartItem = function (props) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.name}>Name : {props.item.name}</div>
        <div className={styles.amount}>Amount : {props.item.amount}</div>
        <div className={styles.cost}>
          Cost : {+props.item.cost * +props.item.amount}$
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
