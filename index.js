/* index.js */

var readline = require('readline');
var chalk = require('chalk');
var randomWord = require('./dictionary');
var guessesTaken = 0;
var len = randomWord.word.length;
var chances = 3;

// console.log(randomWord.word);
// console.log(randomWord.meta.hints);

var readline = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

readline.setPrompt('> ');

readline.question('Hi there, what is your name?\n> ', function(str) {
  write('Welcome ' + chalk.underline(str) + ', Let\'s play trivia as you learn some programming lingo :)');
  write('I have a random word: ' + chalk.bold(mask(randomWord.word)));
  write('You got '+ chalk.underline(chances) +' chances to hack this buddy!');
  write('A couple of hints:');
  for(var i = 0; i < randomWord.meta.hints.length; i++) {
    console.log(chalk.gray.italic(i + 1 + '. ' +randomWord.meta.hints[i]));
  }
  write('Take a guess...');
  readline.prompt();
});

readline.on('line', function(line) {
  line = line.trim();
  guessesTaken = guessesTaken + 1;

  if (guessesTaken < chances + 1) {

    if (/\d/.test(line)) {
      write('You are a wild nerd! We only allow letters in these geek words! Try again...', 1);
    } else if (line.length > len) {
      write('Your creative power is amazing! Prune the extra letters you got there and try again...', 1);
    } else if (line.length < len) {
      write('Oh my, letters are for free so your word need not be short, keep trying...', 1);
    } else if (line.length === len && line !== randomWord.word) {
      // check nearness
      var misses = compareStr(randomWord.word, line);
      var str = misses > 1 ? 's' : '';
      write('You got '+ misses +' letter'+ str +' out of place. Please recheck!', 1);
    }
    readline.prompt();

  } else {
    write('All your chances spent!', 1)
    write('The word is ' + chalk.green.bold(randomWord.word));
    write('Definition: ' + chalk.blue(randomWord.meta.definition));
    readline.close();
  }

  if (line === randomWord.word) {
    write('Congrats smart!');
    write('Definition: ' + chalk.blue(randomWord.meta.definition));
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

function write(str, alert) {
  if (alert == 1)
    return console.log(chalk.red(str));

  return console.log(chalk.yellow(str));
}
