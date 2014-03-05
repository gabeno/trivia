'use strict';

var dictionary = {
  password: {
    definition: {},
    hints: [
      "It is a seven letter word",
      "It is used a security feature in computer systems",
      "Without it you can never even check your email"
    ]
  },

  algorithm: {
    definition: {},
    hints: [
      "All software is based on this",
      "Makes a dumb computer to be smart",
      "If you can write it well, then you are an awesome software engineer :)"
    ]
  },

  stream: {
    definition: {},
    hints: [
      "It flows like a river",
      "Node hackers like it lots too!",
      "You will probably use it to manage how you receive and process data"
    ]
  },

  expression: {
    definition: {},
    hints: [
      "It evaluates to something",
      "For others, it is a mode to communicate."
    ]
  },

  variable: {
    definition: {},
    hints: [
      "Think of it like a container...",
      "It holds different values of different types at any given time",
      "Very handy when you need to keep something you later need in your program"
    ]
  },

  execution: {
    definition: {},
    hints: [
      "No no, not what the hangman does; At least not for you and I.",
      "This is what a program does as it runs.",
      "It happens when a method or function is invoked"
    ]
  },

  statement: {
    definition: {},
    hints: [
      "It is executed to make something happen",
      "We use it when we need to assign a value to some variable"
    ]
  },

  idempotent: {
    definition: {},
    hints: [
      "It loves state!",
      "Nothing happens when you have it around in your code."
    ]
  }
};

function getRandomWord() {
  var words = Object.keys(dictionary),
    randomIndex = Math.floor(Math.random() * words.length);

  return {
    word: words[randomIndex],
    meta: dictionary[words[randomIndex]]
  };
}

module.exports = getRandomWord();