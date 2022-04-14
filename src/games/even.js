#!/usr/bin/env node
import _ from 'lodash';
import { general } from "../index.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

export function question() {
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

const even = () => general(question, getDate);

export default even;
