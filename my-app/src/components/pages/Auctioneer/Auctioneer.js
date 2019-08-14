import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavExample from '../../components/Navbar/Navbar';
import "./Auctioneer.css"

//import Quizzes from '../../pages/Quizzes/Quizzes'


class Auctioneer extends Component {
  state = {
    homes: [],

  };
  render() {
    return (


        <div className="background">
        <Jumbotron />
        <NavExample />
          <br></br>
          <div id="p1"><p>Auctioneer Services</p></div>
        </div>

    );
  }
}

export default Auctioneer;