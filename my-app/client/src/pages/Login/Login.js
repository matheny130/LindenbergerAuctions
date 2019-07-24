import React, { Component } from "react";
import QuizAPI from "../../utils/QuizAPI";
import UserAPI from "../../utils/userAPI";
import { Link } from "react-router-dom";



class Login extends Component {
  state = {
    username: "",
    password: ""
  };



  render() {
    return (
      <div>
        <p>Login Page</p>
      </div>
    );
  }
}

export default Login;
