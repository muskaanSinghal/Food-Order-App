import React from "react";
import MealsHeader from "./MealsHeader";
import Meal from "./Meal";
import styles from "./MealsList.module.css";

const MealsList = function () {
  //array of objects

  const mealArray = [
    {
      name: "Hot Pot ",
      feature: "a very hot delicacy!",
      cost: 500,
      id: "e1",
    },
    { name: "Dosa", feature: "crispy", cost: 700, id: "e2" },
    {
      name: "gulab jamun",
      feature: "dipped in hot syrup!",
      cost: 1000,
      id: "e3",
    },
    { name: "chocolate", feature: "hot chocolate!", cost: 144, id: "e4" },
  ];
  return (
    <React.Fragment>
      <div className={styles.mealHolder}>
        {/* meal summary */}
        <MealsHeader />

        {/* actual */}
        <div className={styles.mainContainer}>
          {mealArray.map((meal, index) => (
            <Meal meal={meal} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
//
export default MealsList;
