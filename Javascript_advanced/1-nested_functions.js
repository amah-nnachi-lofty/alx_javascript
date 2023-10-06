/*
Closure Scope Chain 
 */


// Declare a global variable named 'globalVariable' with the value 'Welcome'
const globalVariable = 'Welcome';

// Define the 'outer' function
function outer() {
    // Alert the content of the 'globalVariable'
    alert(globalVariable);
    
    // Create a local variable named 'course' with the value 'Holberton'
    const course = 'Holberton';

    // Define the 'inner' function within 'outer'
    function inner() {
        // Alert the content of 'globalVariable' and 'course' (concatenated)
        alert(`${globalVariable} ${course}`);

        // Create a local variable named 'exclamation' with the value '!'
        const exclamation = '!';

        // Define the 'inception' function within 'inner'
        function inception() {
            // Alert the content of 'globalVariable', 'course', and 'exclamation' (concatenated)
            alert(`${globalVariable} ${course}${exclamation}`);
        }

        // Call the 'inception' function
        inception();
    }

    // Call the 'inner' function
    inner();
}

// Call the 'outer' function to initiate the nested function calls
outer();
