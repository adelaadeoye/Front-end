import React, { Component } from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";

// == Style == //
import "../../App.css";
import axios from "axios";

class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      name: "",
      username: "",
      password: "",
      email: "",
      gender: "",
      age: "",
      height: "",
      currentweight: "",
      activitylevel: "",
      goal: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  switchSign = e => {
    e.preventDefault();
    this.setState({ signIn: !this.state.signIn });
  };
  registerUser = e => {
    e.preventDefault();
    const {
      name,
      username,
      password,
      email,
      gender,
      activitylevel,
      goal
    } = this.state;
    let age = Number(this.state.age);
    let height = Number(this.state.height);
    let currentweight = Number(this.state.currentweight);
    const newUser = {
      username,
      password,
      gender,
      email,
      age,
      height,
      currentweight,
      name,
      activitylevel,
      goal
    };
    axios
      .post(
        `https://lambda-macro-calculator.herokuapp.com/users/create`,
        newUser,
        /*`grant_type=password&username=${newUser.username}&password=${newUser.password}&gender=${newUser.gender}&email=${newUser.email}&age=${newUser.age}&height=${newUser.height}&currentweight=${newUser.currentweight}&name=${newUser.name}&activitylevel=${newUser.activitylevel}&goal=${newUser.goal}`,*/ {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => console.log(res.data))
      .catch(err => console.dir(err));
    this.switchSign(e);
  };
  signIn = e => {
    if(e) e.preventDefault();
    
    const { username, password } = this.state;
    const user = { username, password };
    axios
      .post(
        `https://lambda-macro-calculator.herokuapp.com/oauth/token`,
        `grant_type=password&username=${username}&password=${password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      )
      .then(res => {console.log(res.data.access_token)
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token')
        }
        localStorage.setItem('token', res.data.access_token)
        this.props.history.replace('/dashboard')
      })
      .catch(err => console.dir(err));
  };
  render() {
    return (
      <div className="OnBoard">
        {this.state.signIn ? (
          <SignIn
            handleChanges={this.handleChange}
            state={this.state}
            switchSign={this.switchSign}
            signIn={this.signIn}
          />
        ) : (
          <SignUp
            handleChanges={this.handleChange}
            addUser={this.registerUser}
            state={this.state}
            switchSign={this.switchSign}
          />
        )}
      </div>
    );
  }
}

export default OnBoard;