import store from "../Store/Store";
import { useState, useReducer } from "react";

const reducerFunction = function (state, action) {
  if (action.type === "increment") {
    return { value: state.value + action.payload };
  }
};

const StoreComponent = function (props) {
  //   const [value, setValue] = useState(0);
  //practice
  const [value, setValue] = useReducer(reducerFunction, { value: 0 });
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <store.Provider
      value={{
        value: value,
        setValue: setValue,
        cartItems: cartItems,
        setCartItems: setCartItems,
        isActive: isActive,
        setIsActive: setIsActive,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default StoreComponent;
