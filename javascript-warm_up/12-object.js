#!/usr/bin/node

/*
Updated object with the value 12 replaced with 89
This code works by first creating an object called myObject with two properties: type and value
*/
const myObject = {
  type: "object",
  value: 12,
};

// Print the object to be replaced
console.log(myObject);

// Replace the value 12 with 89
myObject.value = 89;

// Printing the updated object using console.log
console.log(myObject);
