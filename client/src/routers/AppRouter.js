import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Login from "../components/login/Login";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default AppRouter;
