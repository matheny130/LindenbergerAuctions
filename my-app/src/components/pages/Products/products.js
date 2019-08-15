import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavExample from '../../components/Navbar/Navbar';
import QuizAPI from "../../utils/QuizAPI";
import QuizBox from "../../components/QuizBox/QuizBox";
// import data from "../../data.json";
import Container from "../../components/Container/Container";
//import UserAPI from "../../utils/userAPI";
//import { Link } from "react-router-dom";



class Products extends Component {
  state = {
    quizzes: []
  }

  componentDidMount() {
    this.loadQuizzes();

  };

  loadQuizzes() {
    QuizAPI.getQuizzes()
      .then(res =>
        this.setState({
          quizzes: res.data
        })
      )
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="background">
        <Jumbotron />
        <NavExample />
        <br></br>
        <div id="p1"><p>Products</p></div>
        <br></br>
        <Container>
          <div className="row">
            {this.state.quizzes.map(item => (
              <QuizBox
                key={item._id}
                id={item._id}
                quizTitle={item.quizTitle}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Products;
