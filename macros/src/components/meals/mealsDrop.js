import React from "react";

function MealsDropDown(props) {
  return (
    <select
      name="mealChoice"
      value={props.mealChoice}
      onChange={props.handleChanges}
    >
      <option />
      <option value={"4 meals a day"}>4 meals</option>
      <option value={"3 meals a day"}>3 meals</option>
      <option value={"3 meals and 2 snacks"}>3 meals + 2 snacks</option>
    </select>
  );
}

export default MealsDropDown;