import React, { Component } from 'react';
import data from "../data.json";
import Quiz from "../components/Quiz/Quiz"

class QuizPage extends Component {
    state = {
        data,
        p: this.props.match.params.id - 1
    }
    handleSubmit = () => {
        alert("You submitted this thingy!")
    }


    render() {
        return (
            <div>
                <Quiz
                    quizTitle={this.state.data[this.state.p].quizTitle}

                    Q1={this.state.data[this.state.p].q1.question}

                    correctQ1A1={this.state.data[this.state.p].q1.answers.answer1.correct}
                    Q1A1={this.state.data[this.state.p].q1.answers.answer1.answer}
                    correctQ1A2={this.state.data[this.state.p].q1.answers.answer2.correct}
                    Q1A2={this.state.data[this.state.p].q1.answers.answer2.answer}
                    correctQ1A3={this.state.data[this.state.p].q1.answers.answer3.correct}
                    Q1A3={this.state.data[this.state.p].q1.answers.answer3.answer}
                    correctQ1A4={this.state.data[this.state.p].q1.answers.answer4.correct}
                    Q1A4={this.state.data[this.state.p].q1.answers.answer4.answer}

                    Q2={this.state.data[this.state.p].q1.question}

                    correctQ2A1={this.state.data[this.state.p].q2.answers.answer1.correct}
                    Q2A1={this.state.data[this.state.p].q2.answers.answer1.answer}
                    correctQ2A2={this.state.data[this.state.p].q2.answers.answer2.correct}
                    Q2A2={this.state.data[this.state.p].q2.answers.answer2.answer}
                    correctQ2A3={this.state.data[this.state.p].q2.answers.answer3.correct}
                    Q2A3={this.state.data[this.state.p].q1.answers.answer3.answer}
                    correctQ2A4={this.state.data[this.state.p].q2.answers.answer4.correct}
                    Q2A4={this.state.data[this.state.p].q2.answers.answer4.answer}

                    Q3={this.state.data[this.state.p].q1.question}

                    correctQ3A1={this.state.data[this.state.p].q3.answers.answer1.correct}
                    Q3A1={this.state.data[this.state.p].q3.answers.answer1.answer}
                    correctQ3A2={this.state.data[this.state.p].q3.answers.answer2.correct}
                    Q3A2={this.state.data[this.state.p].q3.answers.answer2.answer}
                    correctQ3A3={this.state.data[this.state.p].q3.answers.answer3.correct}
                    Q3A3={this.state.data[this.state.p].q3.answers.answer3.answer}
                    correctQ3A4={this.state.data[this.state.p].q3.answers.answer4.correct}
                    Q3A4={this.state.data[this.state.p].q3.answers.answer4.answer}
                    handleSubmit={this.handleSubmit}
                />

            </div>
        );
    }
}

export default QuizPage;
