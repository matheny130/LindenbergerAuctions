import React from "react";
import { Link } from "react-router-dom";
import "./QuizBox.css"
const style = {
  margin: "20px"
}

const QuizBox = props => (

    <div className="card col-4-md" id="quizbox" style={style}>
        <div className="card-body">
          <Link to={"/quiz/" + props.id} >
            {props.quizTitle}
          </Link>
        </div>
    </div>

)

export default QuizBox;