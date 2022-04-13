#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from 'readline-sync';

function games() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNum = _.shuffle(_.range(1, 100)).slice(0, 3);
  for (const el of randomNum) {
    console.log(`Question: ${el}`);
    const answer = readlineSync.question('Your answer: ');
    if ((el % 2 === 0 && answer === 'yes') || (el % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (el % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\r Let's try again, ${userName}!`);
      return;
    } else if (el % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\r Let's try again, ${userName}!`);
      return;
    }
  }

  return console.log(`Congratulations, ${userName}!`);
}

games();
