import { faker } from "./helpers.js";

const model = {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa
        minima id obcaecati aliquam impedit iste aperiam. Recusandae, officiis
        neque?`,
      correctAnswerIndex: 0,
      possibleAnswers: [
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
                  isCorrect: true,
                  score: 100
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
                  score: 100
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
                  score: 100
            },
            {
                  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                        velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
                  score: 100
            },
      ]
};

const quizze = faker(10);

export default quizze;