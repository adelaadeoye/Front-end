import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
function App() {
  return (
    <div className="App">
     

     <Route exact path="/signup" render={props => <SignUp {...props}/>}/>
     <Route exact path="/login" render={props => <LogIn {...props}/>}/>
    </div>
  );
}

export default App;
