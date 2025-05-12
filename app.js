import inquirer from 'inquirer';

const welcomeMessage = `
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

`

const guessNumber = Math.floor(Math.random() * 100) + 1;

console.log(welcomeMessage);

const {level} = await inquirer.prompt([{ type: 'number', name: 'level', message: 'Enter your choice: ' }]);

const gameLevel = await getLevel(level);

console.log(`Great! You have selected the ${gameLevel[0]} difficulty level.\nLet's start the game!\n`)

startGame(gameLevel[1]);

async function getLevel(level) {

  switch (level){
    case 1:
      return ['Easy', 10];
    case 2:
      return ['Medium', 5];
    case 3:
      return ['Hard', 3];
    default:
      return ['Easy', 10];
  }
}  

async function startGame(level) {

  for(let i = 1; i <= level; i++){

    const {guess} = await inquirer.prompt([{type:'number', name:'guess', message:'Enter your guess: '}]);
    if ( guess > guessNumber){
      console.log(`Incorrect! The number is less than ${guess}.\n`)
    }
    else if (guess < guessNumber){
      console.log(`Incorrect! The number is greater than ${guess}.\n`)
    }
    else if (guess === guessNumber){
      console.log(`Congratulations! You guessed the correct number in ${i} attempts.\n`)
      return ;
    }
  }
  console.log('Game over you Lost')
}
