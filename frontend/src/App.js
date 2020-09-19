import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const callApi = () => {
    axios.get('/api/test-authUser')
    // axios.get('/api/welcome')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload in DOCKER.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={callApi}>Make request!</button>
      </header>
    </div>
  );
}

export default App;
