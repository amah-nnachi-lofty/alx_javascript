// 1-email-validation.js: JavaScript file to validate email format based on provided email format criteria.

// Retrieve form, email input, and error message elements from the DOM
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');

/**
 * Function to validate email format and display error messages if invalid.
 * @param {Event} event - Form submission event.
 */
function validateEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve email value from the input field
    const emailValue = emailInput.value;

    // Regular expressions for email format criteria
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email format is valid and generate appropriate error messages
    const isValidEmail = emailRegex.test(emailValue);

    // Display the error messages in the error element
    if (isValidEmail) {
        errorElement.textContent = ''; // Clear error message if email is valid
        emailForm.submit(); // Allow form submission if email format is correct
    } else {
        errorElement.textContent = 'Please enter a valid email address.'; // Display error message for invalid email format
    }
}

// Add event listener to form for validation when submitted
emailForm.addEventListener('submit', validateEmail);
