import quizze from "./quizz.js";

const answersState = {
    currentQuestionIndex: 0,
    score: 0,
    progress: 1,
};

export const getCurrent = () => {
    return answersState.currentQuestionIndex;
}

export const getScore = () => {
    return answersState.score;
}

export const incrementScore = () => {
    answersState.score++;
}

export const calcPercentage = (totaleQ) => {
    return answersState.progress / totaleQ * 100
}

export const next = () => {
    answersState.currentQuestionIndex++;
    answersState.progress++;
}

export const isLast = () => {
    return getCurrent() >= (quizze.length - 1)
}

export {
    answersState
}