import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Callback from './Callback/Callback';
import history from './history';
import Products from './pages/Products';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
