import React from "react";
// == Style == //
import "../../cards.css";

function CurrentMeals(props) {
    let choice = null
    if (props.state.macros && props.state.macros.meals) choice = props.state.macros.meals
    
    let meals = 0
    let snacks = 0
    if (props.state.macros && props.state.macros.meals) {
        choice = choice.split(' ')
        meals = choice[0]
        if (choice.length == 5) {
            snacks = choice[3]
        }
    }
  return (
    <div className="CurrentMeals">
      <h3>Current Meal Schedule</h3>
      <div className="card">
        <p>
          You are currently eating<h4>{meals} meals</h4>
          and<h4>{snacks} snacks</h4>
          per day
        </p>
        <button onClick={props.editSwitch} className="minor meal">Edit</button>
      </div>
    </div>
  );
}

export default CurrentMeals;
