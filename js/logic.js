let quizze = [];



const answersState = {
    currentQuestionIndex: 0,
    score: 0,
};


const loadScores = () => {
    try {
        return JSON.parse(localStorage.getItem("scores"));
    } catch (error) {
        return [];
    }
}

const scores = loadScores() || [];

export const setQuizz = (res) => {
    quizze = res
}

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
    answersState.score += currentQ().score;
}

export const calcPercentage = () => {
    return (answersState.currentQuestionIndex + 1) / quizze.length * 100
}

export const next = () => {
    answersState.currentQuestionIndex++;
    answersState.progress++;
}

export const isLast = () => {
    return getCurrent() > (quizze.length - 1)
}

export const isCorrect = (answerIndex) => {
    return currentQ().possibleAnswers[answerIndex].isCorrect;
}

export const progress = () => {
    return `${answersState.currentQuestionIndex + 1}/${quizze.length}`;
}

export const addScore = (state) => {
    const index = scores.findIndex((item) => item.name === state.name);

    if (index != -1) {
        scores[index] = state;
        return;
    }

    scores.push(state);
}

export const saveScoreLocal = () => {
    localStorage.setItem("scores", JSON.stringify(scores))
}

export {
    scores
}