import React from "react";
// == Style == //
import "../../inputs.css";
import "../../cards.css";

const SignIn = props => {
  return (
    <div className="SignIn">
      <h2>Sign In</h2>
      <div className="card">
        <form onSubmit={props.signIn}>
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
          <br />
        </form>
        <p className="switch" onClick={props.switchSign}>
          Don't have an account yet?
        </p>
        <br />
        <button onClick={props.signIn}>Sign In</button>
      </div>
    </div>
  );
};
export default SignIn;