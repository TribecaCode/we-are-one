import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from "@reach/router"
import Browse from './pages/Browse'
import Schedule from './pages/Schedule'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Router>
        <Browse path="/" />
        <Schedule path="/schedule" />
        <Details path="/films/:slug" />
      </Router>
    </div>
  );
}

export default App;
