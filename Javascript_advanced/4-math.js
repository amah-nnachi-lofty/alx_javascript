// To demostrate a Complex Closure that defines two functions, divideBy and addBy, and creates four closures based on them.
//
// divideBy takes one argument, firstNumber, and returns a function that takes one argument, secondNumber, and returns the second number divided by the first number.
// addBy takes one argument, firstNumber, and returns a function that takes one argument, secondNumber, and returns the sum of the two numbers.
//
// The four closures are:
// * addBy100, that uses the function addBy with the number 100
// * addBy1000, that uses the function addBy with the number 1000
// * divideBy10, that uses the function divideBy with the number 10
// * divideBy100, that uses the function divideBy with the number 100

/**
 * This function takes one argument, firstNumber, and returns a function that takes one argument, secondNumber, and returns the second number divided by the first number.
 *
 * @param {number} firstNumber The first number.
 * @returns {function} A function that takes one argument, secondNumber, and returns the second number divided by the first number.
 */
function divideBy(firstNumber) {
    return (secondNumber) => secondNumber / firstNumber;
  }
  
  /**
   * This function takes one argument, firstNumber, and returns a function that takes one argument, secondNumber, and returns the sum of the two numbers.
   *
   * @param {number} firstNumber The first number.
   * @returns {function} A function that takes one argument, secondNumber, and returns the sum of the two numbers.
   */
  function addBy(firstNumber) {
    return (secondNumber) => firstNumber + secondNumber;
  }
  
  // Create four closures:
  // * addBy100, that uses the function addBy with the number 100
  // * addBy1000, that uses the function addBy with the number 1000
  // * divideBy10, that uses the function divideBy with the number 10
  // * divideBy100, that uses the function divideBy with the number 100
  
  const addBy100 = addBy(100);
  const addBy1000 = addBy(1000);
  const divideBy10 = divideBy(10);
  const divideBy100 = divideBy(100);
  
  // Execute the following code to print the following output to the console:
  
  /*console.log(addBy100(20)); // 120
  console.log(divideBy10(20)); // 2
  console.log(divideBy100(200)); // 2
  console.log(addBy1000(20)); // 1020
  */
  