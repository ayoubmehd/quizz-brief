import quizze from "./quizz.js";

const answersState = {
    currentQuestionIndex: 0,
    score: 0,
};

export const getCurrent = () => {
    return answersState.currentQuestionIndex;
}

export const currentQ = () => {
    return quizze[getCurrent()];
}

export const getScore = () => {
    return answersState.score;
}

export const incrementScore = () => {
    answersState.score++;
}

export const calcPercentage = () => {
    return answersState.progress / quizze.length * 100
}

export const next = () => {
    answersState.currentQuestionIndex++;
    answersState.progress++;
}

export const isLast = () => {
    return getCurrent() >= (quizze.length - 1)
}

export const isCorrect = (answerIndex) => {
    return currentQ().correctAnswerIndex === answerIndex;
}

export const progress = () => {
    return `${answersState.currentQuestionIndex + 1}/${quizze.length}`;
}