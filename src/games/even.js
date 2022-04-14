import general from '../index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function task() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

export function getDate() {
  const num = getRandomInt(1, 100);
  const question = num;
  let correctAnswer = '';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return { question, correctAnswer };
}

const even = () => general(task, getDate);

export default even;
