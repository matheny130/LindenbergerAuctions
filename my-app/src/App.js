import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/Home';
//import Callback from './Callback/Callback';
//import history from './history';
import Auctioneer from './components/pages/Auctioneer/Auctioneer'
import Products from './components/pages/Products/products';
import Item from './components/pages/Item/item';
import NewProduct from './components/pages/NewProduct';
//import Navbar from './components/Navbar/Navbar';
//import logo from './logo.svg';
import './App.css';


const App = () => (


        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/auctioneerservices" component={Auctioneer} />
            <Route path="/products" component={Products} />
            <Route path="/item/:id" component={Item} />
            <Route path="/newproduct" component={NewProduct} />
          </div>
        </Router>

    );










//function App() {
  //return (
   // <div className="App">
     // <header className="App-header">
     //   <img src={logo} className="App-logo" alt="logo" />
       // <p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

export default App;