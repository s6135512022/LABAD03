import React from 'react';
import WordCard from './WordCard';
import logo from './gmail.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <WordCard value="hello"/>
        </div>
        <img src={logo} className="App-logo"/>
        <p>
          6135512022 HELLO GAME
        </p>
      </header>
    </div>
  );
}

export default App;