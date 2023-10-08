// 0-password-strength.js: JavaScript file to validate password strength based on given criteria.

// Retrieve form, password input, and error message elements from the DOM
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const lengthError = document.getElementById('lengthError');
const uppercaseError = document.getElementById('uppercaseError');
const lowercaseError = document.getElementById('lowercaseError');
const digitError = document.getElementById('digitError');
const specialCharError = document.getElementById('specialCharError');

// Function to validate password strength
function validatePassword(event) {
    event.preventDefault(); // Prevent form submission by default

    // Retrieve password value from the input field
    const password = passwordInput.value;

    // Regular expressions for password criteria
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Check if password meets individual criteria and display appropriate error messages
    lengthError.textContent = password.length >= 8 ? '' : 'Password must be at least 8 characters long.';
    uppercaseError.textContent = uppercaseRegex.test(password) ? '' : 'Password must include at least one uppercase letter.';
    lowercaseError.textContent = lowercaseRegex.test(password) ? '' : 'Password must include at least one lowercase letter.';
    digitError.textContent = digitRegex.test(password) ? '' : 'Password must include at least one numeric digit.';
    specialCharError.textContent = specialCharRegex.test(password) ? '' : 'Password must include at least one special character (!@#$%^&*).';

    // Check if all criteria are met, then allow form submission
    if (password.length >= 8 && uppercaseRegex.test(password) && lowercaseRegex.test(password) && digitRegex.test(password) && specialCharRegex.test(password)) {
        passwordForm.submit(); // Allow form submission if password meets criteria
    }
}

// Add event listener to form for validation when submitted
passwordForm.addEventListener('submit', validatePassword);
