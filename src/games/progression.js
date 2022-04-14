import general from '../index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function task() {
  console.log('What is the result of the expression?');
}

export function getDate() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const result = [num1];

  for (let i = 0; i <= 9; i += 1) {
    const newEl = result[i] + num2;
    result.push(newEl);
  }

  const correctAnswer = result[Math.floor(Math.random() * result.length)];
  const index = result.indexOf(correctAnswer);
  result[index] = '..';
  const question = result.toString();
  return { question, correctAnswer };
}

const progression = () => general(task, getDate);

export default progression;
