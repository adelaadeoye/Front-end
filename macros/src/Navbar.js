import React from "react";
import { NavLink } from "react-router-dom";
// == Style == //
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <NavLink className="navlink">
        <h1><span>MACRO CALCULATOR</span></h1>
        </NavLink>
      </div>
      <div className="links">
      <NavLink className="navlink" to={'/sign'}>
          <h3><span>Sign In</span></h3>
        </NavLink>
        <NavLink className="navlink" to={'/dashboard'}>
          <h3><span>Dashboard</span></h3>
        </NavLink>
       
        
        <NavLink className="navlink" to={'/sign'}>
          <h3><span>Sign Out</span></h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;