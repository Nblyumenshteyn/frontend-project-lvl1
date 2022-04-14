#!/usr/bin/env node

import { general } from "../index.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

export function question() {
  console.log('Find the greatest common divisor of given numbers.');
}

function NOD (x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export function getDate() {
  let num1 = getRandomInt(1, 100);
  let num2 =getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = NOD(num1, num2);

  return { question, correctAnswer };
}

const greatestCommonDivisor = () => general(question, getDate);

export default greatestCommonDivisor;
