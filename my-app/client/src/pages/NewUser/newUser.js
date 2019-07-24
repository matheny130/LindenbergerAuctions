import React, { Component } from "react";
import QuizAPI from "../../utils/QuizAPI";
import userAPI from "../../utils/userAPI";
import { Link } from "react-router-dom";


class newUser extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };


  render() {
    return (

            <div>
              <p>New User Page</p>
            </div>


    );
  }
}

export default newUser;
