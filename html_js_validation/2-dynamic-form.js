// 2-dynamic-form.js: JavaScript file to generate dynamic input fields and validate the form.

// Retrieve form, dropdown, and input container elements from the DOM
const dynamicForm = document.getElementById('dynamicForm');
const numFieldsDropdown = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

/**
 * Function to generate the specified number of text input fields dynamically.
 * @param {number} numFields - Number of text input fields to generate.
 */
function generateInputFields(numFields) {
  inputContainer.innerHTML = ''; // Clear previous fields
  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = 'field' + i; // Assign unique name attribute to differentiate fields
    inputField.placeholder = 'Field ' + i;
    inputContainer.appendChild(inputField);
  }
}

// Event listener to detect changes in the dropdown menu selection
numFieldsDropdown.addEventListener('change', function(event) {
  const selectedValue = parseInt(event.target.value);
  generateInputFields(selectedValue); // Generate input fields based on selected value
});

/**
 * Function to validate the form before submission.
 * @param {Event} event - Form submission event.
 */
function validateForm(event) {
  const inputFields = document.querySelectorAll('#inputContainer input');
  for (const field of inputFields) {
    if (field.value.trim() === '') {
      event.preventDefault(); // Prevent form submission if any field is empty
      alert('Please fill in all fields.'); // Display error message
      return;
    }
  }
  // Retrieve values entered in the dynamically generated text input fields
  const fieldValues = Array.from(inputFields).map(field => field.value);
  console.log('Entered values:', fieldValues); // Log the values for demonstration purposes
}

// Event listener to validate the form when submitted
dynamicForm.addEventListener('submit', validateForm);
