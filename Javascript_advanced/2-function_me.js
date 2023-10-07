/*
 * Write a function named welcomeMessage:
    It accepts one argument fullName (string)
    It should be a closure for an alert displaying Welcome <fullName>

 * @param {string} fullName 
 * @returns 
 */

// Define the function named 'welcomeMessage' as a closure
function welcomeMessage(fullName) {
    // Return a function that displays an alert with the welcome message
    return function() {
        alert(`Welcome ${fullName}`);
    };
}

// Create variables 'guillaume', 'alex', and 'fred' using 'welcomeMessage' function with different arguments
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

// Test the functions by calling them in the console
// guillaume();
// alex();
// fred();
