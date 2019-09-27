import React from "react";
// == Style == //
import "../../cards.css";

function MealsInfo(props) {
    let recommended = props.recommended
  return (
    <div className="MealsInfo">
      <h3>Your Recommended Meal Macros</h3>
      <div className="card">
        <table>
            <tr><th>Macro</th><th>Meals</th><th>Snacks</th></tr>
          <tr>
            <td><h4>Fat:</h4></td>
            <td><p>{recommended?recommended.fatsPerMeal:'0'}g</p></td>
            <td><p>{recommended?recommended.fatsPerSnack:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Carbs:</h4></td>
            <td><p>{recommended?recommended.carbsPerMeal:'0'}g</p></td>
            <td><p>{recommended?recommended.carbsPerSnack:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Protein:</h4></td>
            <td><p>{recommended?recommended.proteinPerMeal:'0'}g</p></td>
            <td><p>{recommended?recommended.proteinPerSnack:'0'}g</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MealsInfo;