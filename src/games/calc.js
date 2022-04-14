#!/usr/bin/env node

import { general } from "../index.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

export function question() {
  console.log('What is the result of the expression?');
}

function result(operator, num1, num2) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
}

export function getDate() {
  let num1 = getRandomInt(1, 100);
  let num2 =getRandomInt(1, 100);
  let arr = ['+', '-', '*'];
  let operator = arr[Math.floor(Math.random() * arr.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = result(operator, num1, num2);

  return { question, correctAnswer };
}

const calc = () => general(question, getDate);

export default calc;
