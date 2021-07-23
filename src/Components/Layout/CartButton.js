import React, { useContext } from "react";
// import cartImage from "../assets/cart.png";
// import reactDom from "react-dom";
import styles from "./CartButton.module.css";
import store from "../../Store/Store";
import CartIcon from "./CartIcon";
import CartItems from "../Cart/CartItems";
import Modal from "../UI/Modal";
const CartButton = function () {
  const ctx = useContext(store);
  // const [isActive, setIsActive] = useState(false);

  const clickHandler = function () {
    //modal window appears
    ctx.setIsActive(true);
  };

  return (
    <React.Fragment>
      <button className={styles.cartButton} onClick={clickHandler}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{ctx.value.value}</span>
      </button>
      {ctx.isActive && (
        <Modal>
          <CartItems />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CartButton;
