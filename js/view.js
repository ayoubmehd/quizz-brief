import { newEl } from "./helpers.js";


export const correctAnswer = (el) => {
    el.classList.add("bg-green-400");
}

export const wrongAnswer = (el) => {
    el.classList.add("bg-red-400");
}

export default (data, eventHandlers) => {
    const questionText = document.querySelector("#questionText");
    const answers = document.querySelector("#answers");
    const score = document.querySelector("#score");
    const progress = document.querySelector("#progress");

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

    // Render
    questionText.textContent = data.questionText;
    for (const [index, val] of data.options.entries()) {
        const el = newEl('article', [], [{
            key: "class",
            value: answersElClasses
        }]);

        el.dataset.index = index;


        // Handle click
        el.addEventListener('click', eventHandlers.answer);

        el.textContent = val;
        answers.appendChild(el);
    }

    // Points
    score.textContent = data.score;

    // Progress
    progress.textContent = data.progress;
    progress.style = `width: ${data.progressPercent}%`;
}