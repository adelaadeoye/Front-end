import React from "react";

function GoalDropDown(props) {
  return (
    <select name="goal" value={props.goal} onChange={props.handleChanges}>
      <option />
      <option value={"aggressive weight loss"}>
        aggressive weight loss (20% deficit)
      </option>
      <option value={"moderate weight loss"}>moderate weight loss (15% deficit)</option>
      <option value={"weight loss"}>weight loss (10% deficit)</option>
      <option value={"maintain weight"}>maintain weight</option>
      <option value={"moderate weight gain"}>moderate weight gain (10% surplus)</option>
      <option value={"aggressive weight gain"}>
        aggressive weight gain (15% surplus)
      </option>
    </select>
  );
}

export default GoalDropDown;