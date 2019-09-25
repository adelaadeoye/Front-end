import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import FormContainer from './components/FormContainer'
function App() {
 
  return (

    <div className="App">

    <Route exact path="/" render={props => <FormContainer {...props}/>} />
    <Route path="/register" render={props => <Register {...props} />} />
    <Route path="/login" render={props => <LogIn {...props} />  } />
    <Route path="/signup" render={props => <SignUp {...props} />} />
    </div>
  );
}

export default App;
