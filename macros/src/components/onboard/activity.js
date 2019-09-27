import React from "react";

function ActivityDropDown(props) {
  return (
    <select
      name="activitylevel"
      value={props.activitylevel}
      onChange={props.handleChanges}
    >
      <option />
      <option value={"0 days"}>0 days</option>
      <option value={"1-2 days"}>1-2 days</option>
      <option value={"3-4 days"}>3-4 days</option>
      <option value={"5-6 days"}>5-6 days</option>
      <option value={"7 days"}>7 days</option>
    </select>
  );
}

export default ActivityDropDown;