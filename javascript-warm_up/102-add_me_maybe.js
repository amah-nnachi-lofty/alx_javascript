/* Write a function that increments and calls a function.
    The function must be visible from outside
    Prototype: function (number, theFunction)
    You are not allowed to use var
 */

function addMeMaybe(number, theFunction) {
    newNumber = number + 1;
    theFunction(newNumber);
  }
  
  //This will export the function to enable visibility outside
  module.exports.addMeMaybe = addMeMaybe;