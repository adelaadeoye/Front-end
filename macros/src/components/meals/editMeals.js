import React from "react";
// == Components == //
import MealsDropDown from "./mealsDrop.js";
// == Style == //
import "../../cards.css";

function EditMeals(props) {
    let choice = props.state.macros.meals
    let meals = 0
    let snacks = 0
    if (props.state.macros.meals) {
        choice = choice.split(' ')
        meals = choice[0]
        if (choice.length == 5) {
            snacks = choice[3]
        }
    }
  return (
    <div className="EditMeals">
      <h3>Edit Meals Schedule</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>
          You are currently eating
          <h4>{meals} meals, {snacks} snacks</h4>
          <h4>New Schedule:</h4>
          <MealsDropDown
            handleChanges={props.handleChange}
            mealChoice={props.state.mealChoice}
          />
        </p>
        <button onClick={props.editMeals} className="minor mealsub">
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditMeals;