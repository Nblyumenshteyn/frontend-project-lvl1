import general from '../index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function task() {
  console.log('Find the greatest common divisor of given numbers.');
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export function getDate() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = NOD(num1, num2);

  return { question, correctAnswer };
}

const greatestCommonDivisor = () => general(task, getDate);

export default greatestCommonDivisor;
