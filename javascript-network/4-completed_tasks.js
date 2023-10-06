#!/usr/bin/node

/*
  Write a script that computes the number of tasks completed by user id.
    The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    Only print users with completed tasks.
    You must use the module request.
 */

// HTTP request module.
const request = require('request'); 
// Get the API URL from command line arguments.
const apiUrl = process.argv[2]; 

// Check if API URL is provided.
if (apiUrl) {
  // Make a GET request to the specified API URL.
  request(apiUrl, function (error, response, body) {
    // Handle potential errors in the request.
    if (error) {
        // Print the error message and exit the function.
      return console.error(error); 
    }

    const todos = JSON.parse(body); 
    // Parse the JSON response body.
    const completedTasks = {}; 
    // Object to store completed tasks count by user ID.

    // Loop through the tasks to count completed tasks by user.
    for (const todo of todos) {
      if (todo.completed) { 
        // Check if the task is completed.
        const userId = todo.userId.toString(); 
        // Get the user ID as a string.
        if (completedTasks[userId]) {
          completedTasks[userId] += 1; 
          // Increment the completed tasks count for the user.
        } else {
          completedTasks[userId] = 1; 
          // Initialize the completed tasks count for the user.
        }
      }
    }

    console.log(completedTasks); 
    // Print the completed tasks count by user ID.
  });
}
