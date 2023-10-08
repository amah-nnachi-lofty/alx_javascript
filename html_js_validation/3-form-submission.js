// 3-form-submission.js: JavaScript file to handle form submission and perform validation.

// Retrieve form element from the DOM
const submitForm = document.getElementById('submitForm');

/**
 * Function to handle form submission.
 * @param {Event} event - Form submission event.
 */
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Retrieve form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // Validate form fields
  if (!name || !email) {
    // Display error message if required fields are empty
    alert('Please fill in all required fields.');
  } else {
    // Display success message if all validations pass
    alert('Form submitted successfully!');
    // Optionally, you can submit the form data to a server using AJAX here
  }
}

// Event listener to handle form submission
submitForm.addEventListener('submit', handleFormSubmit);
