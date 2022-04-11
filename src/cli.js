import readlineSync from 'readline-sync';

export default function welcomeUser() {
  let userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
}
