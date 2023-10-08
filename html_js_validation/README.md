# HTML Form + JS validation

## 0. Form Validation - Password Strength 
Implement JavaScript validation to check the password strength when the form is submitted.
Retrieve the value entered in the password input field using JavaScript.

Your JavaScript should be written in a separate file and used as an external script in the HTML code

Write a function called validatePassword to validate the password based on the provided criteria.

The validatePassword function should check the following criteria:

The password must be at least 8 characters long.

The password must contain at least one uppercase letter.

The password must contain at least one lowercase letter.

The password must contain at least one numeric digit.

The password must contain at least one special character (e.g., !@#$%^&*).

If the password meets all the criteria, allow the form submission.

If the password does not meet the criteria, display an appropriate error message in the <p> element with the id “error” .

## 1. Form Validation - Email Validation 


    Implement JavaScript validation to check the email format when the form is submitted.

    Retrieve the value entered in the email input field using JavaScript.

    Your JavaScript should be written in a separate file and used as an external script in the HTML code

    Write a function called validateEmail to validate the email based on the email format.

    The validateEmail function should check if the email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name.

    If the email format is correct, allow the form submission.

    If the email format is incorrect, display the error message “Please enter a valid email address.” in the

    element with the id "error".

    Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.

## 2. Dynamic Form Field 
Implement JavaScript to generate a dynamic number of text input fields based on the selected value in the dropdown menu.

    Retrieve the selected value from the dropdown menu using JavaScript.

    Write a function called generateInputFields to generate the specified number of text input fields dynamically within the “inputContainer” div.

    The generateInputFields function should take the selected value from the dropdown menu as a parameter.

    Inside the generateInputFields function, use a loop or other appropriate logic to create the desired number of text input fields.

    Each text input field should have a unique name attribute, such as “field1”, “field2”, etc., to differentiate them.

    Append the dynamically generated text input fields to the “inputContainer” div.

    Implement JavaScript validation to ensure that all dynamically generated fields are filled before submitting the form.

    Write a function called validateForm to validate the form before submission.

    The validateForm function should be called when the form is submitted.

    Inside the validateForm function, retrieve the values entered in the dynamically generated text input fields using JavaScript.

    Check if any of the fields are empty. If any field is empty, prevent the form submission and display the error message “Please fill in all fields”.

Note: You may need to use event listeners or other appropriate techniques to detect changes in the dropdown menu selection and handle form submission.

## 3. Form Submission Handling 
Implement JavaScript to handle form submission and perform validation before submitting.

    Write a function called handleFormSubmit to handle the form submission.

    Your JavaScript should be written in a separate file and used as an external script in the HTML code.

    Add an event listener to the form element to listen for the “submit” event and call the handleFormSubmit function.

    Inside the handleFormSubmit function, prevent the default form submission behavior using event.preventDefault().

    Retrieve the values entered in the form fields using JavaScript.

    Use JavaScript validation to ensure that all required fields are filled.

    Check if the “name” and “email” fields are filled. If any of them are empty, display the error message “Please fill in all required fields”.

    If all validations pass, display a success message “Form submitted successfully!” .

    If any validations fail, do not submit the form and allow the user to correct the errors before submitting again.

Note: You may need to use the DOM manipulation methods, such as getElementById(), to retrieve form field values and update the DOM to display error messages or success messages.


