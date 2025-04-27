// Create an array with different data types: strings, number, boolean, and an object
let students = [
    'maha',
    'haya',
    'zoha',
    6,
    true,
    {
        capital: "Islamabad",
        Flag: "White and Green",
        Language: "Urdu",
        Anthem: function Pakistan() {
            return "Dil Dil Pakistan";
        }
    }
];

// Print the total number of elements in the array
console.log("Length of the array:", students.length);

// Print the last element of the array
console.log("Last element of the array is:", students[students.length - 1]);

// Again print the last element (which is an object)
console.log(students[students.length - 1]);

// Access and print the 'Language' property from the last object
console.log("Language property:", students[students.length - 1].Language);

// Access and print the 'Anthem' function (it will show function definition, not the return value)
console.log("Anthem function:", students[students.length - 1].Anthem);

// Update the 3rd element ('zoha') to 'Zoha' (fixing case sensitivity)
students[2] = "Zoha";

// Accessing students[-1] (invalid in JS, will give undefined)
console.log("Accessing -1 index (undefined):", students[-1]);

// Print the entire updated array
console.log("Updated students array:", students);

// Convert the array to a string and print it
console.log("Array converted to string:", students.toString());

// Check the type after converting the array to a string
console.log("Type after toString():", typeof students.toString());

// Check the type of the length of the string (length is always a number)
console.log("Type of string length:", typeof students.toString().length);

// ---------------------- Array Operations with another array ---------------------

// Create a new array with some student names
let jsStudents = [
    'maham',
    'shoaib',
    'mohid'
];

// Add 'Noor' to the end of the array
jsStudents.push('Noor');

// Remove the last element ('Noor') from the array
jsStudents.pop(); // pop() doesn't need an argument

// Sort the array alphabetically
console.log("Sorted jsStudents array:", jsStudents);

// ---------------------- Loop through students array ---------------------

// Loop through each element in students array and print its type
students.forEach((student, index) => {
    console.log(`Value at index ${index} has type = ${typeof student}`);
});
