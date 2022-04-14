import readlineSync from 'readline-sync';

export default function general(task, getDate) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const newUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  console.log(`Hello, ${newUserName}!`);

  task();
  const countCalculations = 3;

  for (let i = 1; i <= countCalculations; i += 1) {
    const { question, correctAnswer } = getDate();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == correctAnswer) {
      console.log('Correct!');
    } else if (answer != correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${newUserName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${newUserName}!`);
}
