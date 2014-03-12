/* index.js */

var readline   = require('readline');
var chalk      = require('chalk');
var randomWord = require('./dictionary');
var obfuscate  = require('./utils/obfuscate');
var chance     = require('./utils/chance');
var compareStr = require('./utils/compareStr');


var guessesTaken = 0;
var len          = randomWord.word.length;
var maskedWord   = obfuscate(randomWord.word);
var chances      = chance(maskedWord).chances;
var dashes       = chance(maskedWord).dashes;
var userName;

var readline = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

readline.setPrompt('> ');

readline.question('Hi there, your name please? ', function(str) {
  userName = str;

  write('Hi ' + chalk.bold(userName) + ', let\'s play trivia as you learn some programming lingo :)');
  write('I have a random word: ' + chalk.bold(maskedWord));
  write('You got '+ chalk.bold(chances) +' chances to hack this buddy!');
  write('Here are a couple of hints:');
  for(var i = 0; i < randomWord.meta.hints.length; i++) {
    console.log(chalk.gray.italic(i + 1 + '. ' +randomWord.meta.hints[i]));
  }
  write('Take a guess...');
  readline.prompt();
});

readline.on('line', function(line) {
  line = line.trim();
  guessesTaken = guessesTaken + 1;

  // make hay while sun shines :)
  if (guessesTaken < chances) {
    if (line !== randomWord.word) {
      if (/\d/.test(line)) {
        write('You are a wild nerd! We only allow letters in these geek words! Try again...', 1);
      } 
      else if (line.length > len) {
        write('Your creative power is amazing! Prune the extra letters you got there ...', 1);
      } 
      else if (line.length < len) {
        write('Oh my, letters are for free so your word need not be short, keep trying...', 1);
      }
      else if (line.indexOf('_') == 1) {
        write('Oh no, you forgot to fill in a letter(s)!', 1);
      }
      else if (line.length === len && line !== randomWord.word) {
        // check nearness
        var misses = compareStr(randomWord.word, line);
        var str = misses > 1 ? 's' : '';

        if (misses >= Math.round(dashes / 2 + 1)) // set this based on mask fn
          write('You are way off, I doubt you have the right word!', 1);
        else if (misses < Math.round(dashes / 2 + 1))
          write('You got '+ misses +' letter'+ str +' out of place. Please recheck!', 1);
      }
      readline.prompt();
    } else {
      write('Congrats '+ chalk.bold(userName) +'!');
      displayWord(randomWord);
      readline.close();
      // readline.resume();
      // playAgain();
      // readline.prompt();
    }
  }

  // Oops, lost opportunities!
  if (guessesTaken == chances) {
    if (line === randomWord.word) {
      write('Congrats '+ chalk.bold(userName) +'!');
    } else {
      write(chalk.bold(userName) + ', all your chances spent!', 1);
    }

    displayWord(randomWord);
    readline.close();
    // readline.resume();
    // playAgain();
    // readline.prompt();
  }

});

/**
 * -------------------------------------------------------
 *                  HELPER FUNCTIONS
 * -------------------------------------------------------
 */

 /**
  * prompt use with option to play another word
  * @return {[undefined]}
  */
function playAgain() {
  console.log('Would you like to play another word? y/n');
  readline.pause();
}

/**
 * write outptut to the console
 * normal => yellow, alert => red
 * @param  {[String]}   str   [string to be output]
 * @param  {[Number]}   alert [a number to determine the level of alert]
 * @return {[Function]}       [console.log() function]
 */
function write(str, alert) {
  if (alert == 1)
    return console.log(chalk.red(str));

  return console.log(chalk.yellow(str));
}

/**
 * display word and its definition in the command line
 * @param  {[Object]} word [Object with word and definition]
 * @return {[Undefined]}
 */
function displayWord(word) {
  write('The word is ' + chalk.green(word.word));
  write('Definition: ' + chalk.magenta(word.meta.definition));
}