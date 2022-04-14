import general from '../index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function task() {
  console.log('What is the result of the expression?');
}

function result(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
}

export function getDate() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const arr = ['+', '-', '*'];
  const operator = arr[Math.floor(Math.random() * arr.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = result(operator, num1, num2);

  return { question, correctAnswer };
}

const calc = () => general(task, getDate);

export default calc;
