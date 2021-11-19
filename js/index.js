import view, { correctAnswer, wrongAnswer } from "./view.js";
import { getCurrent, next, isLast, incrementScore, getScore, calcPercentage, currentQ, progress, isCorrect } from "./logic.js";
// import { isCorrect } from "./questionController.js"

startQuizz()

function startQuizz() {

    const currentQuestion = currentQ();

    if (!currentQuestion) return;


    view(
        {
            questionText: currentQuestion.question,
            options: currentQuestion.possibleAnswers,
            score: getScore(),
            progress: progress(),
            progressPercent: calcPercentage()
        },
        {
            answer: ({ target }) => {

                const index = parseInt(target.dataset.index);

                if (isCorrect(index)) {
                    correctAnswer(target)
                    incrementScore()
                } else {
                    wrongAnswer(target)
                }
                if (!currentQuestion) return;

                setTimeout(() => {
                    next()
                    startQuizz()
                    if (isLast()) {
                        console.log("Quizz is done")
                    }
                }, 2000)
            }
        }
    );
}