#!/usr/bin/node

const myObject = {
    type: "object",
    // Property: type with the value "object"
    value: 12,
    // Property: value with the initial value 12
  };
  console.log(myObject);
  
  myObject.incr = function () {
    this.value++;
    // Method: incr, increments the 'value' property of the object by 1
  };
  myObject.incr();
  // Method incr() is called, incrementing 'value' from 12 to 13 and so forth
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);