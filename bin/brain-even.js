#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from 'readline-sync';
import welcomeUser from '../src/cli.js';

export default welcomeUser;

console.log('Welcome to the Brain Games!');

welcomeUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function games() {
  const randomNum = _.shuffle(_.range(1, 100)).slice(0, 3);
  for (const el of randomNum) {
    console.log(`Question: ${el}`);
    const answer = readlineSync.question('Your answer: ');
    if ((el % 2 === 0 && answer === 'yes') || (el % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (el % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\
      Let's try again, Bill!`);
      break;
    } else if (el % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\
      Let's try again, Bill!`);
      break;
    }
  }

  return console.log('Congratulations, Bill!');
}

games();
