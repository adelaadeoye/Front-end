import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// == Components == //
import OnBoard from "./components/onboard/onboard";
import Dashboard from "./components/dashboard/dashboard";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/sign" component={OnBoard} />
          <Route path="/dashboard" component={Dashboard} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);