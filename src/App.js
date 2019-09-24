import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import FormContainer from './components/FormContainer'
function App() {
 
  return (

    <div className="App">

    <FormContainer/>
    </div>
  );
}

export default App;
