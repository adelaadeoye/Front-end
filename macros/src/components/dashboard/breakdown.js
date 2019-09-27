import React, { Component } from "react";
import axios from 'axios'
// == Components == //
import CurrentGoal from "./currentGoal";
import EditGoal from "./editGoal";
import Recommended from "./recommended";
// == Style == //
import "../../cards.css";

class Breakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGoal: false,
      goal: "",
      currentweight: ""
    };
  }
  editSwitch = e => {
    e.preventDefault();
    this.setState({ editGoal: !this.state.editGoal });
  };
  editGoal = e => {
    let newGoal = {goal:this.state.goal, currentweight:this.state.currentweight}
    this.props.editGoal(newGoal)
    //this.setState({...this.state, mealChoice:dummyUser.mealChoice})
    this.editSwitch(e);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
      console.log("breakdown state", this.state)
    return (
      <div className="Breakdown">
        <div className="card-container">
          <Recommended state={this.props.state} />
          {this.state.editGoal ? (
            <EditGoal
              handleChange={this.handleChange}
              state={this.props.state}
              editSwitch={this.editSwitch}
              editGoal={this.editGoal}
            />
          ) : (
            <CurrentGoal
              state={this.props.state}
              editSwitch={this.editSwitch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Breakdown;