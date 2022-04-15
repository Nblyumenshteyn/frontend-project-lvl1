import general from '../index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function task() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export function getDate() {
  const num = getRandomInt(1, 100);
  const result = [];
  let correctAnswer = '';

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }

    if (result.length === 1) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
  }

  return { question: num, correctAnswer };
}

const prime = () => general(task, getDate);

export default prime;
