import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavExample from '../../components/Navbar/Navbar';
import "./Home.css"

//import Quizzes from '../../pages/Quizzes/Quizzes'


class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (


        <div className="background">
        <Jumbotron />
        <NavExample />
          <br></br>
          <div id="p1"><p>Home Page</p></div>
          <br></br>
          <div id="p2"><p>Other Stuff Here</p></div>


        </div>

    );
  }
}

export default Home;