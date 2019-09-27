import React from "react";
// == Components == //
import GoalDropDown from "../onboard/goal";
// == Style == //
import "../../cards.css";

function EditGoal(props) {
  let goal = props.state.user.goal;
  let weight = props.state.user.currentweight
  return (
    <div className="EditGoal">
      <h3>Edit Goal and Weight</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>
        Your current weight is <h4>{weight}</h4>
        <h5>New Weight:</h5>
            <input
              name="currentweight"
              value={props.state.currentweight}
              onChange={props.handleChange}
            /><br/><br/>
          Your current goal is
          <h4>
            {goal}
          </h4>
          <h5>New Goal:</h5>
          <GoalDropDown
            handleChanges={props.handleChange}
            goal={props.state.newGoal}
          />
        </p>
        <button onClick={props.editGoal} className="minor sub">
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditGoal;