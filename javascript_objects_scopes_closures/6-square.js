#!/usr/bin/node

/**
 * Import the Square class from 5-square.js file.
 * Export a class Square that inherits from the imported Square class.
 */
const Square = require('./5-square');

module.exports = class ExtendedSquare extends Square {
  /**
   * Creates an instance method charPrint that prints the rectangle using the character c.
   * If c is undefined, use the character 'X'.
   * @param {string} c - The character to be used for printing the rectangle.
   */
  charPrint(c) {
    // If c is undefined, set it to 'X'.
    if (c === undefined) {
      c = 'X';
    }

    // Loop through the height of the square and print each line with character c repeated width times.
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};
