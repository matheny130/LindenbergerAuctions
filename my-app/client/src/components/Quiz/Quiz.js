import React, { Component } from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, ButtonGroup,
    Container, Row, Col
} from 'reactstrap';

import "./Quiz.css";

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rSelected1: "",
            rSelected2: "",
            rSelected3: ""
        }

        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick1(rSelected1) {
        this.setState({ rSelected1 });
    }
    onRadioBtnClick2(rSelected2) {
        this.setState({ rSelected2 });
    }
    onRadioBtnClick3(rSelected3) {
        this.setState({ rSelected3 });
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card className="testBox">
                                <Row>
                                    <Col>
                                        <CardBody>
                                            <CardTitle id="title">{this.props.quizTitle}</CardTitle>
                                            <CardSubtitle>{this.props.Q1}</CardSubtitle>

                                            <ButtonGroup className="buttonSize">
                                                <Button id="quizBtn"
                                                    onClick={(e) => {
                                                        this.onRadioBtnClick1(1);
                                                        this.props.handleClick1(e);
                                                    }
                                                    }
                                                    active={this.state.rSelected1 === 1}
                                                    value={this.props.correctQ1A1}>
                                                    {this.props.Q1A1}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick1(2);
                                                    this.props.handleClick1(e);
                                                }
                                                }
                                                    active={this.state.rSelected1 === 2} 
                                                    value={this.props.correctQ1A2}>{this.props.Q1A2}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick1(3);
                                                    this.props.handleClick1(e);
                                                }
                                                }
                                                    active={this.state.rSelected1 === 3} 
                                                    value={this.props.correctQ1A3}>{this.props.Q1A3}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick1(4);
                                                    this.props.handleClick1(e);
                                                }
                                                }
                                                    active={this.state.rSelected1 === 4} 
                                                    value={this.props.correctQ1A4}>{this.props.Q1A4}</Button>
                                            </ButtonGroup>

                                            <CardSubtitle>{this.props.Q2}</CardSubtitle>

                                            <ButtonGroup className="buttonSize">
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick2(1);
                                                    this.props.handleClick2(e);
                                                }
                                                }
                                                    active={this.state.rSelected2 === 1}
                                                    value={this.props.correctQ2A1}>{this.props.Q2A1}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick2(2);
                                                    this.props.handleClick2(e);
                                                }
                                                }
                                                    active={this.state.rSelected2 === 2}
                                                    value={this.props.correctQ2A2}>{this.props.Q2A2}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick2(3);
                                                    this.props.handleClick2(e);
                                                }
                                                }
                                                    active={this.state.rSelected2 === 3}
                                                    value={this.props.correctQ2A3}>{this.props.Q2A3}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick2(4);
                                                    this.props.handleClick2(e);
                                                }
                                                }
                                                    active={this.state.rSelected2 === 4}
                                                    value={this.props.correctQ2A4}>{this.props.Q2A4}</Button>
                                            </ButtonGroup>

                                            <CardSubtitle>{this.props.Q3}</CardSubtitle>

                                            <ButtonGroup className="buttonSize">
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick3(1);
                                                    this.props.handleClick3(e);
                                                }
                                                }
                                                    active={this.state.rSelected3 === 1}
                                                    value={this.props.correctQ3A1}>{this.props.Q3A1}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick3(2);
                                                    this.props.handleClick3(e);
                                                }
                                                }
                                                    active={this.state.rSelected3 === 2}
                                                    value={this.props.correctQ3A2}>{this.props.Q3A2}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick3(3);
                                                    this.props.handleClick3(e);
                                                }
                                                }
                                                    active={this.state.rSelected3 === 3}
                                                    value={this.props.correctQ3A3}>{this.props.Q3A3}</Button>
                                                <Button id="quizBtn" onClick={(e) => {
                                                    this.onRadioBtnClick3(4);
                                                    this.props.handleClick3(e);
                                                }
                                                }
                                                    active={this.state.rSelected3 === 4}
                                                    value={this.props.correctQ3A4}>{this.props.Q3A4}</Button>
                                            </ButtonGroup>

                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex justify-content-center">
                                            <Button id="quizBtn" className="btn-lg" onClick={this.props.handleSubmit}>Submit</Button>
                                        </div>
                                    </Col>

                                </Row>


                            </Card>
                        </Col>
                    </Row>


                </Container>

            </div>
        )
    }
}

export default Quiz;