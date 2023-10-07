/**
 * This function creates a classroom with the specified number of students.
 *
 * @param {number} numbersOfStudents The number of students in the classroom.
 * @returns {array} An array of student seat numbers.
 */

// Define the createClassRoom function that takes the number of students as an argument
function createClassRoom(numbersOfStudents) {
    // Define the studentSeat function inside createClassRoom
    function studentSeat(seat) {
        // Return a function that returns the seat number
        return function() {
            return seat;
        };
    }

    // Initialize an empty array 'students' to store student seat functions
    const students = [];

    // Loop from 0 to numbersOfStudents - 1 to create and populate student seat functions
    for (let i = 0; i < numbersOfStudents; i++) {
        // Pass the seat number (i + 1) to studentSeat and add its return value to the students array
        students.push(studentSeat(i + 1));
    }

    // Return the students array
    return students;
}

// Create a closure classRoom by calling createClassRoom with 10 students
const classRoom = createClassRoom(10);

// Test the closure classRoom by calling specific indices and logging the results
/**
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
 */
