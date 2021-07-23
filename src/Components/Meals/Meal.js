//row of meal
import React, { useContext } from "react";
import styles from "./Meal.module.css";
import AmountAdder from "./AmountAdder";
import store from "../../Store/Store";

//props => object from thr array of the objects
const Meal = function (props) {
  const ctx = useContext(store);
  // console.log(props.meal);
  //

  //props => name ,feature,cost ,
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.leftPart}>
          <div className={styles.mealName}>{props.meal.name}</div>
          <div className={styles.mealFeature}>{props.meal.feature}</div>
          <div className={styles.cost}>{props.meal.cost}$</div>
        </div>
        <div className={styles.rightPart}>
          <AmountAdder currentDish={props.meal}></AmountAdder>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meal;
