// == Dependencies == //
import React, { Component } from "react";
import axios from 'axios'
// == Components == //
import CurrentMeals from "./currentMeals";
import MealsInfo from "./mealsInfo";
import EditMeals from "./editMeals";
// == Style == //
import "../../cards.css";

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMeal: false,
      mealChoice: "",
      macros: {}
    };
  }
  componentDidMount() {
    this.fetchMeals()
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.fetchMeals()
    }
  }
  fetchMeals() {
    this.setState({...this.state, macros: this.props.macros})
       // this.setState({...this.state, mealMacs: dummyMealMacs, mealChoice: dummyUser.mealChoice })
  }
  editSwitch = e => {
    e.preventDefault();
    this.setState({ editMeal: !this.state.editMeal });
  };
  editMeals = e => {
    let mealChoice = this.state.mealChoice
    this.props.editMeals(mealChoice)
    this.editSwitch(e);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="Meals">
        <div className="card-container">
          <MealsInfo recommended={this.state.macros}/>
          {this.state.editMeal ? (
            <EditMeals
              handleChange={this.handleChange}
              state={this.state}
              editSwitch={this.editSwitch}
              editMeals={this.editMeals}
            />
          ) : (
            <CurrentMeals
              handleChange={this.handleChange}
              state={this.state}
              editSwitch={this.editSwitch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Meals;