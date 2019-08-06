import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quizzes from "../../pages/Quizzes/Quizzes";
import Login from "../../pages/Login/Login";
import NewUser from "../../pages/NewUser";
import Home from "../../pages/Home/Home";
import NewQuiz from "../../pages/NewQuiz/newQuiz";
import QuizPage from "../../pages/Quiz/QuizPage";
import "./Page.css"


class Page extends Component {
  render() {
    return (
      <Router>
        <div className= "page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/quizzes" component={Quizzes} />
            <Route exact path="/newquiz" component={NewQuiz} />
            <Route exact path="/quiz/:id" component={QuizPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Page;