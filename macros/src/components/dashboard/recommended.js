import React from "react";
// == Style == //
import "../../cards.css";

function Recommended(props) {
    let recommended = null
  if(props.state.user.macros) recommended = props.state.user.macros;
  return (
    <div className="Recommended">
      <h3>Your Recommended Daily Macros</h3>
      <div className="card">
        <table>
            <tr><th>Macro</th><th>Total</th></tr>
          <tr>
            <td><h4>Calories:</h4></td>
            <td><p>{recommended?recommended.calories:'0'}</p></td>
          </tr>
          <tr>
            <td><h4>Fat:</h4></td>
            <td><p>{recommended?recommended.fat:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Carbs:</h4></td>
            <td><p>{recommended?recommended.carb:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Protein:</h4></td>
            <td><p>{recommended?recommended.protein:'0'}g</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Recommended;