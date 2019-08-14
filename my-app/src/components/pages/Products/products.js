import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavExample from '../../components/Navbar/Navbar';
//import QuizAPI from "../../utils/QuizAPI";
//import UserAPI from "../../utils/userAPI";
//import { Link } from "react-router-dom";



class Products extends Component {
  state = {
    username: "",
    password: ""
  };



  render() {
    return (
      <div className="background">
        <Jumbotron />
        <NavExample />
        <br></br>
        <div id="p1"><p>Products</p></div>
      </div>
    );
  }
}

export default Products;
