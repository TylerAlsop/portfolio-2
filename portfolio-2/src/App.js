import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-heading">Tyler Alsop</h1>
        <h3 className="app-subheading">Web Developer</h3>
      </header>
      <div className="deployed-projects">
        <h1 className="section-heading">Delpoyed Apps</h1>
        <h3 className="app-link"><a className="app-link" href="https://react-american-football-scoreboard-sigma.now.sh/" target="_blank">American Football Scoreboard</a></h3>
      </div>

    </div>
  );
}

export default App;
