import React from "react";
import styles from "./MealsHeader.module.css";

const MealsHeader = function () {
  return (
    <React.Fragment>
      <div className={styles.summary}>
        <h2>Delicious food at your doorstep!</h2>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In omnis et
          iure, nostrum cumque dolorum suscipit vitae nobis incidunt. Odit
          ducimus nisi culpa consequuntur aut maxime ipsam saepe facere
          exercitationem.
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealsHeader;
