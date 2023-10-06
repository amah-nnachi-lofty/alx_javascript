#!/usr/bin/node

// Import the required modules.
const request = require('request');
const fs = require('fs');

/**
 * Function to request a webpage and store its content in a file.
 * @param {string} url - The URL of the webpage to request.
 * @param {string} filePath - The file path to store the response body.
 */
function requestAndStore(url, filePath) {
  // Make an HTTP GET request to the specified URL.
  request.get(url, (error, response, body) => {
    // Handle potential errors during the request.
    if (error) {
      console.error('Error:', error);
    } else {
      // Write the response body to the specified file path.
      fs.writeFile(filePath, body, 'utf-8', (err) => {
        // Handle errors during file write operation.
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File successfully written:', filePath);
        }
      });
    }
  });
}

// Check if both URL and file path are provided as command line arguments.
if (process.argv.length !== 4) {
  // If not, print an error message and exit the script.
  console.error('Usage: node 3-request_store.js <url> <filePath>');
  process.exit(1);
}

// Get URL and file path from the command line arguments and call the requestAndStore function.
const url = process.argv[2];
const filePath = process.argv[3];
requestAndStore(url, filePath);
