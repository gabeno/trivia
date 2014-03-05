'use strict';

var dictionary = {
  closure: {
    definition: "A function that refers to independent (free) variables.",
    hints: [
      "It helps to keep private stuff private.",
      "Controls access to data within your code."
    ]
  },

  algorithm: {
    definition: "A set of instructions (code) that make the computer do things.",
    hints: [
      "All software is based on this",
      "Makes a dumb computer to be smart",
      "If you can write it well, then you are an awesome software engineer :)"
    ]
  },

  stream: {
    definition: "Continuous flow of data that can be manipulated asynchronously as data comes in (or out)",
    hints: [
      "It flows like a river",
      "Node hackers like it lots too!",
      "You will probably use it to manage how you receive and process data"
    ]
  },

  expression: {
    definition: "Any valid set of literals, variables and operators that evaluate to a single value",
    hints: [
      "It evaluates to something",
      "For others, it is a mode to communicate."
    ]
  },

  variable: {
    definition: "A container for storing informatioin. JS is loosely typed so a variable can hold different types",
    hints: [
      "Think of it like a container that holds some value.",
      "Very handy when you need to keep something you later need in your program"
    ]
  },

  execution: {
    definition: "The process by which a computer or performs the instructions of a computer program",
    hints: [
      "No no, not what the hangman does; At least not for you and I.",
      "This is what a program does as it runs.",
      "It happens when a method or function is invoked"
    ]
  },

  statement: {
    definition: "A command that makes something happen.",
    hints: [
      "It is executed to make something happen",
      "We use it when we need to assign a value to some variable"
    ]
  },

  idempotent: {
    definition: "An operation that has no additional effect if it is called more than once with the same input params",
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