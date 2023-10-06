#!/usr/bin/node

// Import required module.
const request = require('request'); // HTTP request module.

// Get the movie ID from the command line arguments.
const movieId = process.argv[2];

// Check if movie ID is provided.
if (movieId) {
  // API endpoint URL for Star Wars characters in the specified movie.
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  // Make a GET request to the specified API endpoint.
  request(apiUrl, (error, response, body) => {
    // Handle potential errors in the request.
    if (error) {
      console.error(error); // Print the error message.
      return; // Exit the function.
    }

    const movieData = JSON.parse(body); // Parse the JSON response body.
    const characters = movieData.characters; // Extract characters from movie data.

    // Loop through the characters and print their names, one by line.
    characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(charError); // Print error if there's an issue fetching character data.
        } else {
          const characterData = JSON.parse(charBody); // Parse the character data JSON.
          console.log(characterData.name); // Print the character name.
        }
      });
    });
  });
}
