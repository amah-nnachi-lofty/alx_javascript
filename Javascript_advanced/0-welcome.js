// Function named 'welcome' with two parameters: firstName and lastName
function welcome(firstName, lastName) {
    // Variable 'fullName' containing the concatenation of firstName, space, and lastName
    const fullName = `${firstName} ${lastName}`;

    // Function named 'displayFullName' within the 'welcome' function
    function displayFullName() {
        // Display an alert with the welcome message including 'fullName'
        alert(`Welcome ${fullName}!`);
    }

    // Call the 'displayFullName' function at the end of the 'welcome' function
    displayFullName();
}

// Example usage of the 'welcome' function
// welcome('John', 'Doe');
