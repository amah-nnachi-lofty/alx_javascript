#!/usr/bin/node
// The shebang line indicates that the script should be run with the Node.js interpreter

const myObject = {
    type: "object",
    // Property: type with the value "object"
    value: 12,
    // Property: value with the initial value 12
};
console.log(myObject);
// The object is logged to the console, printing its initial state

myObject.incr = function () {
    this.value++;
    // Method: incr, increments the 'value' property of the object by 1
};

myObject.incr();
// Method incr() is called, incrementing 'value' from 12 to 13
console.log(myObject);
// The object is logged to the console, showing the updated 'value' property (13)

myObject.incr();
// Method incr() is called again, incrementing 'value' from 13 to 14
console.log(myObject);
// The object is logged to the console, showing the updated 'value' property (14)

myObject.incr();
// Method incr() is called again, incrementing 'value' from 14 to 15
console.log(myObject);
// The object is logged to the console, showing the updated 'value' property (15)

myObject.incr();
// Method incr() is called again, incrementing 'value' from 15 to 16
console.log(myObject);
// The object is logged to the console, showing the updated 'value' property (16)
