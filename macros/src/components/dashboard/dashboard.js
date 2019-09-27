import React, { Component } from "react";
import axios from "axios";
// == Components == //
import Breakdown from "./breakdown";
import Meals from "../meals/meals";
// == Style == //
import "../../cards.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        token: '',
      user: {
        userid: null,
        username: "",
        email: "",
        gender: "",
        age: null,
        height: null,
        currentweight: null,
        name: "",
        activitylevel: "",
        goal: "",
        macros: {
            macroid: null,
            inches: null,
            protein: null,
            carb: null,
            fat: null,
            calories: null,
            meals: "",
            proteinPerMeal: null,
            fatsPerMeal: null,
            carbsPerMeal: null,
            proteinPerSnack: null,
            fatsPerSnack: null,
            carbsPerSnack: null
        }
    }
    };
  }
  componentDidMount() {
    if (!localStorage.getItem("token")) {
   this.props.history.replace("/sign");
    } else {
        this.setState({...this.state, token: localStorage.getItem("token")})
        this.fetchUserData()
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps || !this.state.user) {
      if (!localStorage.getItem("token")) {
        this.props.history.replace("/sign");
      } else {
        this.fetchUserData();
      }
    }
  }
  fetchUserData = () => {
    axios
      .get(`https://lambda-macro-calculator.herokuapp.com/users/current`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => this.setState({...this.state, user: res.data}, () => console.log("fetched: ", this.state.user)))
      .catch(err => console.dir(err));
    //this.setState({ ...this.state, user: dummyUser, macros: dummyMacros });
  }
  editMeals = (mealChoice) => {
      console.log("mealChoice :", mealChoice)
    let newMacros = {meals: mealChoice}
    axios
    .put(`https://lambda-macro-calculator.herokuapp.com/macros/updatemeals`, newMacros, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => this.fetchUserData())
    .catch(err => console.dir(err));
  }
  editGoal = (newGoal) => {
      console.log("newGoal: ", newGoal)
    axios
    .put(`https://lambda-macro-calculator.herokuapp.com/users/update`, newGoal, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => this.fetchUserData())
    .catch(err => console.dir(err));
  }
  render() {

    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <h3>Welcome, {this.state.user.name}</h3>
        <Breakdown editGoal={this.editGoal} state={this.state} />
        <Meals editMeals={this.editMeals} state={this.state} macros={this.state.user.macros} />
      </div>
    );
  }
}

export default Dashboard;