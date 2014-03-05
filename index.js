/* index.js */

var readline = require('readline');
var chalk = require('chalk');
var randomWord = require('./dictionary');
var guessesTaken = 0;
var len = randomWord.word.length;
var chances = 3;

// console.log(randomWord.word);
// console.log(randomWord.meta);

var readline = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

readline.setPrompt('> ');

readline.question('Hi there, what is your name?\n> ', function(str) {
  console.log('Welcome ' + chalk.bold(str) + '! Let\'s play trivia as you learn some programming lingo :)');
  console.log('I have a random word: ' + chalk.red.bold(mask(randomWord.word)));
  console.log('Can you guess it? You got '+ chances +' chances to hack this buddy!');
  readline.prompt();
});

readline.on('line', function(line) {
  line = line.trim();
  guessesTaken = guessesTaken + 1;

  if (guessesTaken < chances + 1) {

    if (/\d/.test(line)) {
      console.log('You are a wild nerd! We only allow letters in these geek words! Try again...');
    } else if (line.length > len) {
      console.log('Your creative power is amazing! Prune the extra letters you got there and try again...');
    } else if (line.length < len) {
      console.log('Oh my, letters are for free so your word need not be short, keep trying...');
    } else if (line.length === len && line !== randomWord.word) {
      // check nearness
      var misses = compareStr(randomWord.word, line);
      var str = misses > 1 ? 's' : '';
      console.log('You got '+ misses +' letter'+ str +' out of place. Please recheck!')
    }
    readline.prompt();

  } else {
    console.log('All your chances spent!')
    console.log('The word is ' + chalk.green(randomWord.word) + '. Grab some coffee to help refresh your mind :)');
    console.log('Its definition: ' + randomWord.definition);
  }

  if (line === randomWord.word) {
    console.log('Congrats smart!');
    console.log('Here too its definition: ' + randomWord.definition);
    readline.close();
    // readline.resume();
    // playAgain();
    // readline.prompt();
  }
});

function playAgain() {
  console.log('Would you like to play another word? y/n');
  readline.pause();
}

function mask(str) {
  // add level 2 complexity
  return str.replace(/[aeiou]/g, '_');
}

function compareStr(str1, str2) {
  var counter = 0;

  if (str1.length !== str2.length)
    return;

  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i])
      counter++;
  }

  return counter;
}
