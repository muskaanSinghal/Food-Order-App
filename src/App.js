import React from "react";
import Header from "./Components/Layout/Header";
import MealsList from "./Components/Meals/MealsList";
// import store from "./Store/Store.js";
//
const App = function () {
  return (
    <div>
      <Header></Header>
      <MealsList></MealsList>
    </div>
  );
};
export default App;
