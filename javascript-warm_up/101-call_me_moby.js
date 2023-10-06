/* Write a function that executes x times a function.
    The function must be visible from outside
    Prototype: function (x, theFunction)
    You are not allowed to use var
 */

function callMeMoby(x, itsFunction) {
    for (let i = 0; i < x; i++) {
      itsFunction();
    }
  }
  
  //This will export the function to enable visibility outside
  module.exports.callMeMoby = callMeMoby