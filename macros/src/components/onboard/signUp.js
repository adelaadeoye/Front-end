import React from "react";
// == Components ==//
import HeightDropDown from "./height";
import ActivityDropDown from "./activity";
import GoalDropDown from "./goal";
// == Style == //
import "../../cards.css";

const SignUp = props => {
  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <div className="card-container">
        <div className="card">
          <form onSubmit={props.addUser}>
            <h4>Name</h4>
            <div>
              <input
                name="name"
                value={props.state.name}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>Username</h4>
            <div>
              <input
                name="username"
                value={props.state.username}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>Password</h4>
            <div>
              <input
                type="password"
                name="password"
                value={props.state.password}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>Email</h4>
            <div>
              <input
                name="email"
                value={props.state.email}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>Age</h4>
            <div>
              <input
                name="age"
                value={props.state.age}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>Gender</h4>
            <select
              name="gender"
              value={props.state.gender}
              onChange={props.handleChanges}
            >
              <option />
              <option value={"M"}>M</option>
              <option value={"F"}>F</option>
            </select>
          </form>
        </div>
        <div className="card">
          <form>
            <h4>Height</h4>
            <HeightDropDown
              handleChanges={props.handleChanges}
              height={props.state.height}
            />
            <h4>Current Weight (lbs)</h4>
            <div>
              <input
                name="currentweight"
                value={props.state.currentweight}
                onChange={props.handleChanges}
              />
              <span className="input" />
            </div>
            <h4>How many days per week do you exercise?</h4>
            <ActivityDropDown
              handleChanges={props.handleChanges}
              activitylevel={props.state.activitylevel}
            />
            <h4>What are your weight goals?</h4>
            <GoalDropDown
              handleChanges={props.handleChanges}
              goal={props.state.goal}
            />
            <br />
          </form>

          <p class="switch" onClick={props.switchSign}>
            Already have an account?
          </p>
          <br />
          <br />
          <button onClick={props.addUser} className="signup-btn">
            Sign Up
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignUp;