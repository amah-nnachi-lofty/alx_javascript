#!/usr/bin/node

const myObject = {
    type: "object",
    value: 12,
};

console.log(myObject);

myObject.incr = function () {
    this.value++;
    /* Method: incr, increments the 'value' property of the object by 1*/
};

myObject.incr();
console.log(myObject); // Output: { type: 'object', value: 13, incr: [Function] }

myObject.incr();
console.log(myObject); // Output: { type: 'object', value: 14, incr: [Function] }

myObject.incr();
console.log(myObject); // Output: { type: 'object', value: 15, incr: [Function] }
