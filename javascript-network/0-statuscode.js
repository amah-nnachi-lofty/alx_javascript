#!/usr/bin/node

/*Write a script that display the status code of a GET request.

    The first argument is the URL to request (GET)
    The status code must be printed like this: code: <status code>
    You must use the module request (NB: It must be installed if you haven’t already installed it)
 */

// Import the request module.
const request = require('request');

/**
 * Get the status code of a GET request and print it.
 * @param {string} url - The URL to send the GET request.
 */
function printStatusCode(url) {
  // Send a GET request to the specified URL.
  request.get(url, (error, response) => {
    // If there's an error, print the error message.
    if (error) {
      console.error(error);
    } else {
      // If successful, print the status code.
      console.log(`code: ${response.statusCode}`);
    }
  });
}

// Check if the URL is provided as a command line argument.
if (process.argv.length !== 3) {
  // If not, print an error message and exit the script.
  console.error('Usage: node 0-statuscode.js <URL>');
  process.exit(1);
}

// Get the URL from the command line arguments and call the printStatusCode function.
const url = process.argv[2];
printStatusCode(url);
