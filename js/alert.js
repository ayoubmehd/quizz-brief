import { newEl, classAttr } from "./helpers.js"

let alertRef = null;
let scoreDOM = null;
let hightScoreDOM = null;

export const createAlert = (eventHandlers) => {
    const saveBtn = newEl("button", [
        document.createTextNode("Save")
    ], [classAttr("h-10 flex justify-center items-center bg-purple-400 text-white border hover:bg-purple-500 mb-4 w-full")]);
    const tryAgainBtn = newEl("button", [
        document.createTextNode("Try Again")
    ], [classAttr("h-10 flex justify-center items-center border border-purple-400 hover:bg-purple-400 hover:text-white w-full")]);
    const input = newEl("input", [], [
        classAttr("p-2 block w-full"),
        {
            key: "id",
            value: "name"
        },
        {
            key: "type",
            value: "text"
        },
        {
            key: "placeholder",
            value: "Name"
        },
    ]);


    scoreDOM = newEl("div", [document.createTextNode(`Score : `)]);
    hightScoreDOM = newEl("div", [document.createTextNode(`Hight Score : `)]);

    saveBtn.addEventListener('click', () => {
        eventHandlers.saveScore({ name: input.value });
    });
    tryAgainBtn.addEventListener('click', eventHandlers.tryAgain);

    alertRef = newEl('div', [
        newEl("div", [
            newEl("div", [
                scoreDOM, // Score Div
                hightScoreDOM, // Hight Scire div
            ], [classAttr("mb-4 flex justify-between")]),
            newEl("div", [
                newEl("label", [
                    document.createTextNode("Your name")
                ], [
                    classAttr("block mb-2"),
                    {
                        key: "for",
                        value: "name"
                    }
                ]), input,
            ], [classAttr("mb-4")]),
            saveBtn,
            tryAgainBtn
        ], [
            classAttr("bg-gray-300 w-72 p-8")
        ])
    ], [classAttr("w-full h-full fixed left-0 top-0 flex justify-center items-center")])
}



export const showAlert = (score, hightScore) => {
    scoreDOM.textContent = score;
    hightScoreDOM.textContent = hightScore;
    document.body.appendChild(
        alertRef
    )
}

export const hideAlert = () => {
    if (alertRef) {
        document.body.removeChild(alertRef)
    }
}