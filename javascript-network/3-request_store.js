#!/usr/bin/node

// Import required modules.
const fs = require('fs'); // File system module.
const request = require('request'); // HTTP request module.

// Get URL and file path from command line arguments.
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL.
request(url, (error, response, body) => {
  // Handle potential errors in the request.
  if (error) {
    console.error(error); // Print the error message.
    return; // Exit the function.
  }

  // Write the response body to the specified file path in UTF-8 encoding.
  fs.writeFile(filePath, body, 'utf8', (err) => {
    // Handle potential errors in writing the file.
    if (err) {
      console.error(err); // Print the error message.
      return; // Exit the function.
    }
  });
});
