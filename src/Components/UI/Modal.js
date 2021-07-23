import React from "react";

import styles from "./Modal.module.css";
const Modal = function (props) {
  return (
    <React.Fragment>
      <div className={styles.backdrop}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
