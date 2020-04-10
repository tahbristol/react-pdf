import React from 'react';
import logo from './logo.svg';
import './App.css';
import MineSiteView from './View';
import Download from './Pdf.js'

function App() {

const person = {name: 'tyler', age: 37, job: 'dev'}

  return (
    <div className="App">
      <Download person={person}/>
    </div>
  );
}


export default App;
