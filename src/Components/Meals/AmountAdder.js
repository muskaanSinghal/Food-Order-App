import React, { useContext, useState } from "react";
import styles from "./AmountAdder.module.css";
import store from "../../Store/Store";

const AmountAdder = function (props) {
  const ctx = useContext(store);
  const [enteredValue, setEnteredValue] = useState("");
  const changeHandler = function (e) {
    setEnteredValue(e.target.value);
  };

  const clickHandler = function (e) {
    e.preventDefault();
    props.currentDish.amount = enteredValue;
    ctx.setCartItems((prevArray) => [props.currentDish, ...prevArray]);
    ctx.setValue({ type: "increment", payload: +enteredValue });
    setEnteredValue("");
  };

  // console.log(ctx.cartItems);
  return (
    <React.Fragment>
      <form className={styles.form}>
        <div className={styles.upper}>
          <label>Amount</label>
          <input
            type="number"
            onChange={changeHandler}
            value={enteredValue}
            min="1"
            max="5"
            step="1"
          />
        </div>
        <button
          type="submit"
          className={styles.addButton}
          onClick={clickHandler}
        >
          +Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default AmountAdder;
