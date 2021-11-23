import view, { correctAnswer, wrongAnswer, gameBoard, animateTimeout, pauseAnimation, removeAnimation } from "./view.js";
import {
    getCurrent, setQuizz, next, isLast, incrementScore, getScore, calcPercentage,
    currentQ, progress, isCorrect, addScore, saveScoreLocal, isFailed, isSuceeded
} from "./logic.js";
// import { isCorrect } from "./questionController.js"
import quizze from "./quizz.js";
import { showAlert, createAlert, hideAlert } from "./alert.js"

init()

async function init() {
    const quizz = await quizze;
    setQuizz(quizz)
    createAlert({
        saveScore,
        tryAgain
    })
    startQuizz()
}

function saveScore({ name }) {
    addScore({
        name,
        score: getScore()
    });
    saveScoreLocal()
    home()
    hideAlert()
}

function tryAgain() {
    home()
    hideAlert()
}

function home() {
    window.location.replace("index.html")
}

function nextQuestion() {
    next()
    startQuizz()
    if (isLast()) {

        if (isFailed()) {
            console.log("you failde")
            showAlert(getScore(), "You Failed")
        }

        if (isSuceeded()) {
            showAlert(getScore(), "You Suceed")
            console.log("you succed")
        }

    }
}

function setQuestionTimeOut(quizzTime) {

    animateTimeout(quizzTime);

    return setTimeout(() => {
        nextQuestion()
    }, quizzTime)
}


function startQuizz() {
    // const timeout = document.querySelector("#timeout");

    const currentQuestion = currentQ();

    if (!currentQuestion) return;

    const timeOut = setQuestionTimeOut(9000);

    gameBoard(getScore(), progress(), calcPercentage())
    view(
        {
            questionText: currentQuestion.question,
            options: currentQuestion.possibleAnswers,
        },
        {
            answer: ({ target }) => {

                pauseAnimation();
                clearTimeout(timeOut);

                const index = parseInt(target.dataset.index);

                if (isCorrect(index)) {
                    correctAnswer(target)
                    incrementScore()
                    gameBoard(getScore(), progress(), calcPercentage())
                } else {
                    wrongAnswer(target)
                }
                if (!currentQuestion) return;

                setTimeout(() => {
                    removeAnimation()
                    nextQuestion()
                }, 2000)
            },
        }
    );
}