import React, { Component } from 'react';
import './App.css';
import Student from './components/Student';

class App extends Component{
  render()
  {
    return(
      <div>
        <Student name= "Connor" age = {21}/>
      </div>
    )
  }
}
       

export default App;
