#!/usr/bin/node

// Import the required modules.
const fs = require('fs'); // File system module.
const request = require('request'); // HTTP request module.

// Get the URL and file path from command line arguments.
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL.
request(url, (error, response, body) => {
  // Handle potential errors.
  if (error) {
    console.error(error);
  } else {
    // Write the response body to the specified file path in UTF-8 encoding.
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      // Handle write errors.
      if (err) {
        console.error(err);
      } else {
        // Print a success message if the file was written successfully.
        console.log();
      }
    });
  }
});
