#!/usr/bin/node

/**
 * Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:
    You must use the class notation for defining your class and extends
    The constructor must take 1 argument: size
    The constructor of Rectangle must be called (by using super())

 *
 * @extends Rectangle
 */
class Square extends Rectangle {
    /**
     * Constructs a new square.
     *
     * @param {number} size The size of the square.
     */
    constructor(size) {
      super(size, size);
    }
  }
  
  module.exports = Square;
  