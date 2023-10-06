#!/usr/bin/node

// Import the required 'request' module.
const request = require('request');

/**
 * Function to fetch and print the title of a Star Wars movie by ID.
 * @param {number} movieId - The ID of the Star Wars movie to fetch.
 */
function getStarWarsMovieTitle(movieId) {
  // Construct the API URL with the provided movieId.
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

  // Make an HTTP GET request to the API endpoint.
  request.get(apiUrl, (error, response, body) => {
    // Handle potential errors.
    if (error) {
      console.error('Error:', error);
    } else {
      // Parse the JSON response body to extract the movie title.
      const movieData = JSON.parse(body);
      // Print the movie title.
      console.log(movieData.title);
    }
  });
}

// Check if the movie ID is provided as a command line argument.
if (process.argv.length !== 3) {
  // If not, print an error message and exit the script.
  console.error('Usage: node 1-starwars_title.js <movieId>');
  process.exit(1);
}

// Get the movie ID from the command line arguments and call the getStarWarsMovieTitle function.
const movieId = parseInt(process.argv[2], 10);
getStarWarsMovieTitle(movieId);
