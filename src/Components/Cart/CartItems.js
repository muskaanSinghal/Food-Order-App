import React, { useContext } from "react";
import store from "../../Store/Store";
import CartItem from "./CartItem";
import styles from "./CartItems.module.css";
const CartItems = function () {
  const ctx = useContext(store);
  const isEmpty = !ctx.cartItems.length ? true : false;

  const clickHandler = function () {
    ctx.setIsActive(false);
  };

  const orderHandler = function () {
    alert(`Your order is in process!`);
    ctx.setIsActive(false);
  };
  return (
    <React.Fragment>
      {isEmpty ? (
        <div className={styles.mainContainer}>
          <div className={styles.emptyCart}>Your cart is empty !😔😔</div>
          <button className={styles.btn} onClick={clickHandler}>
            Leave Cart ❓
          </button>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            {ctx.cartItems.map((cartItem, index) => (
              <CartItem item={cartItem} key={index} />
            ))}
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={clickHandler}>
              Leave Cart ❓
            </button>
            <button className={styles.btn} onClick={orderHandler}>
              Order 😚
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default CartItems;
