/* Write a script that prints the number of movies where the character “Wedge Antilles” is present.

    The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
    Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
    You must use the module request
 */

const req = require("request");

// Get the movie ID from the command line argument (Star Wars API endpoint).
const url = `${process.argv[2]}`;

// Make a GET request to the API endpoint.
req(url, (error, response, body) => {
  // Handle potential errors.
  if (error) {
    return console.error(error);
  }

  // Parse the JSON response body.
  const data = JSON.parse(body);
  const films = data.results;
  let count = 0;
  const characterId = "18"; // Character ID for Wedge Antilles

  // Iterate through each film.
  for (const film in films) {
    const filmchars = films[film].characters;
    // Iterate through characters in the film.
    for (const charIndex in filmchars) {
      // Check if the character ID includes "18" (Wedge Antilles).
      if (filmchars[charIndex].includes(characterId)) {
        count += 1; // Increment the count if Wedge Antilles is found.
      }
    }
  }

  // Print the total count of movies with Wedge Antilles.
  console.log(count);
});