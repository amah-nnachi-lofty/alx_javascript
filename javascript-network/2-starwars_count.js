#!/usr/bin/node

// Import the required 'request' module.
const request = require('request');

/**
 * Function to count the number of movies where the character "Wedge Antilles" is present.
 * @param {string} apiUrl - The API URL of the Star Wars films endpoint.
 */
function countMoviesWithWedgeAntilles(apiUrl) {
  // Make an HTTP GET request to the API endpoint.
  request.get(apiUrl, (error, response, body) => {
    // Handle potential errors.
    if (error) {
      console.error('Error:', error);
    } else {
      // Parse the JSON response body.
      const filmsData = JSON.parse(body);
      // Filter films where "Wedge Antilles" (character ID 18) is present.
      const moviesWithWedgeAntilles = filmsData.results.filter((film) =>
        film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );
      // Print the number of movies with "Wedge Antilles".
      console.log(moviesWithWedgeAntilles.length);
    }
  });
}

// Check if the API URL is provided as a command line argument.
if (process.argv.length !== 3) {
  // If not, print an error message and exit the script.
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments and call the countMoviesWithWedgeAntilles function.
const apiUrl = process.argv[2];
countMoviesWithWedgeAntilles(apiUrl);
