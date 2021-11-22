import { classAttr, newEl, newElFunc } from "./helpers.js";

const timeout = document.querySelector("#timeout");
let animation = new Animation();

export const animateTimeout = (quizzTime) => {


    animation = timeout.animate([
        {
            width: '100%'
        },
        {
            width: 0
        }
    ],
        {
            duration: quizzTime,
        }
    )

}

export const pauseAnimation = () => {

    animation.pause()

}

export const removeAnimation = () => {
    animation.cancel()
}

export const correctAnswer = (el) => {
    el.classList.add("bg-green-400");
    el.classList.remove("hover:bg-purple-400");
    el.classList.remove("hover:text-white");
}

export const wrongAnswer = (el) => {
    el.classList.add("bg-red-400");
    el.classList.remove("hover:bg-purple-400");
    el.classList.remove("hover:text-white");
}

export const gameBoard = (point, progress, progressPercent) => {
    const score = document.querySelector("#score");
    const progressDOM = document.querySelector("#progress");



    // Points
    score.textContent = point;

    // Progress
    progressDOM.textContent = progress;
    progressDOM.style = `width: ${progressPercent}%`;
}

export const leaderBoard = (scores) => {
    const leaderBoardDOM = document.querySelector("#leader-board");

    const createTr = newElFunc('tr', [], [classAttr("text-center border-b")]);
    const createTd = newElFunc("td")

    leaderBoardDOM.appendChild(
        newEl('tbody', scores.map(item => createTr(
            [
                createTd([document.createTextNode(item.name)]),
                createTd([document.createTextNode(item.score)]),
            ]
        )))
    );
}

export const showScores = () => {

}

export default (data, eventHandlers) => {
    const questionText = document.querySelector("#questionText");
    const answers = document.querySelector("#answers");


    // Answers Style
    const answersElClasses = `
        flex
        justify-center
        items-center
        border border-purple-400
        hover:bg-purple-400 hover:text-white
        w-full
        cursor-pointer
        p-2
        mb-2
    `;


    answers.innerHTML = "";
    questionText.innerHTML = "";

    const clickEvent = (event) => {

        for (const el of answers.children) {
            el.removeEventListener("click", clickEvent)
        }

        eventHandlers.answer(event)
    }
    // Render
    questionText.innerHTML = data.questionText;
    for (const [index, val] of data.options.entries()) {
        const el = newEl('article', [], [{
            key: "class",
            value: answersElClasses
        }]);

        el.dataset.index = index;


        // Handle click
        el.addEventListener('click', clickEvent);

        el.innerHTML = val.text;
        answers.appendChild(el);
    }

}