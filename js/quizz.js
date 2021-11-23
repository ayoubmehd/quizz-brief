import { faker } from "./helpers.js";

const model = {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa
        minima id obcaecati aliquam impedit iste aperiam. Recusandae, officiis
        neque?`,
      correctAnswerIndex: 0,
      score: 100,
      possibleAnswers: [
            {
                  text: `Correct`,
                  isCorrect: true,
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
            },
      ]
};


// const faker = (size = 6) => {

//       const data = [];

//       for (let i = 0; i < size; i++) {
//             data.push({ ...model });
//       }

//       return data;
// }


const quizze = faker();

export default quizze;