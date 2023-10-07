/*
 * Stack order and setTimeout: This script demonstrates the execution flow and order of setTimeout in JavaScript. 
 * It logs the start of the execution queue, prints numbers from 1 to 100 using a loop, and 
 * logs the end of the loop printing. Finally, it logs the final code block using setTimeout 
 * with a delay of 0, showcasing asynchronous behavior.
 */

// Log start of the execution queue
console.log('Start of the execution queue');

// Execute loop with 100 iterations
for (let i = 1; i <= 100; i++) {
    // Log the current iteration number
    console.log(i);
}

// Log end of the loop printing
console.log('End of the loop printing');

// Execute final code block after the current event loop using setTimeout with delay of 0
setTimeout(function() {
    // Log the final code block
    console.log('Final code block to be executed');
}, 0);
