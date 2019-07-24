import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Quizzes from './pages/Quizzes'
import NavExample from './components/Navbar/Navbar';
import NewQuiz from './pages/NewQuiz';
import QuizPage from "./pages/Quiz/QuizPage";
import "./App.css"
import Profile from './pages/Profile/Profile';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  render() {
    return (

      <div className="background">
        {auth.isAuthenticated ? <NavExample auth={auth} /> : null}
        {/* if truthy on left of ? show what is betwen ? and : if falsey than show what is on the right of the : */}
        <Router history={history}>
          <div>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
            <Route path="/quizzes" render={(props) => <Quizzes auth={auth} {...props} />} />
            <Route path="/quiz/:id" render={(props) => <QuizPage auth={auth} {...props} />} />
            <Route path="/newquiz" render={(props) => <NewQuiz auth={auth} {...props} />} />

            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
          </div>
        </Router>
      </div>

    );
  }
}

export default App;