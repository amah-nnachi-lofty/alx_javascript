/*
 * Private methods with closure: This module, studentHogwarts, encapsulates student information and provides methods to modify and retrieve scores.

// The module contains two private variables:
// * privateScore: The student's score.
// * name: The student's name.
//
// The module also contains one private method:
// * changeScoreBy: Takes points in argument and adds them to privateScore.
//
// The module provides access to four public methods:
// * setName: Takes a new name as an argument and sets the private variable name.
// * rewardStudent: Calls the method changeScoreBy with 1.
// * penalizeStudent: Calls the method changeScoreBy with -1.
// * getScore: Returns a string in the format "name: score" (e.g., "Harry: 14").
*/

// Module definition using IIFE (Immediately Invoked Function Expression)
const studentHogwarts = (function() {
    // Private variables
    let privateScore = 0;
    let name = null;

    // Private method to change score by given points
    function changeScoreBy(points) {
        privateScore += points;
    }

    // Public methods exposed to the outside world
    return {
        // Method to set the name
        setName(newName) {
            name = newName;
        },
        // Method to reward the student
        rewardStudent() {
            changeScoreBy(1);
        },
        // Method to penalize the student
        penalizeStudent() {
            changeScoreBy(-1);
        },
        // Method to get the score
        getScore() {
            return `${name}: ${privateScore}`;
        }
    };
})();

// Create an instance of studentHogwarts for Harry
const harry = Object.create(studentHogwarts);

// Set the name of the objects for Harry
harry.setName('Harry');

// Reward Harry four times.
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log the name and score for Harry
console.log(harry.getScore());

// Create another instance of studentHogwarts for Draco
const draco = Object.create(studentHogwarts);

// Set the name of the object for Drago.
draco.setName('Draco');

// Reward Drago once
draco.rewardStudent();

// Penalize Drago 3 times
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log the name and score for Draco
console.log(draco.getScore());
