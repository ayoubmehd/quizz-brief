import { faker } from "./helpers.js";

const model = {
  question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa
        minima id obcaecati aliquam impedit iste aperiam. Recusandae, officiis
        neque?`,
  correctAnswerIndex: 0,
  possibleAnswers: [
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          velit odio praesentium quas expedita cumque id laborum vel vitae quos`,
  ]
};

const quizze = faker(model);

export default quizze;