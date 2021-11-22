const randomOrder = (arr) => {
    return arr.map(val => ({ val, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ val }) => val)
}

export const classAttr = (className) => {
    return {
        key: "class",
        value: className
    }
}

export const newEl = (name, child = [], attr = []) => {
    /**
     * @type {DOMElement}
     */
    const el = document.createElement(name);

    for (const val of child) {
        el.appendChild(val);
    }

    for (const val of attr) {
        el.setAttribute(val.key, val.value);
    }

    return el;
}

export const newElFunc = (name, child = [], attr = []) => {
    return (children = child, attribute = attr) => {
        return newEl(name, children, attribute);
    }
}

const fetchQuizzes = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=20');
    const data = await res.json();

    return data.results;
}

const fromatQuizzes = async (size) => {
    const data = await fetchQuizzes();

    const quizz = []

    for (let i = 0; i < size; i++) {
        const rand = Math.floor(Math.random() * data.length);

        const question = { ...data[rand] };

        const formatedData = {
            question: question.question,
        }

        formatedData.possibleAnswers = [{ text: question.correct_answer, isCorrect: true }];

        for (const item of question.incorrect_answers) {
            formatedData.possibleAnswers.push({
                text: item
            })
        }

        const scores = {
            easy: 100,
            medium: 200,
            hard: 300
        }


        formatedData.score = scores[question.difficulty];

        formatedData.possibleAnswers = randomOrder(formatedData.possibleAnswers)

        quizz.push(formatedData);

        data.splice(rand, 1);
        // console.log(rand, data[rand]);
    }

    return quizz;
}

export const faker = (size = 6) => {
    return fromatQuizzes(size)
}

export const sortScores = (scores) => {
    return [...scores].sort((a, b) => a.score < b.score);
}