const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizesSchema = new Schema({
    
    quizTitle: { type: String, required: true },
    author: {type: String, required: true},
    q1: {
        question: { type: String, required: true },
        answers: {
            answer1: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer2: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer3: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer4: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            }
        }
    },
    q2: {
        question: { type: String, required: true },
        answers: {
            answer1: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer2: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer3: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer4: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            }
        }

    },
    q3: {
        question: { type: String, required: true },
        answers: {
            answer1: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer2: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer3: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            },
            answer4: {
                answer: { type: String, required: true },
                correct: { type: String, required: true }
            }
        }
    },

})

const Quizes = mongoose.model("Quizes", quizesSchema);

module.exports = Quizes;