import React, { Component } from 'react';
import './App.css';
import Student from './components/Student';
import Movies from './components/Movies';

class App extends Component{
  render()
  {
    return(
      <div>
        <Student name= "Connor" age = {21}/>
        <Movies favouriteMovie = "Simpsons movie" favouriteCharacter="Homer simpson" />
      </div>
    )
  }
}
       

export default App;
