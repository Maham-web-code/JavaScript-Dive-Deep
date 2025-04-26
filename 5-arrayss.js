// -----------------------------Courses Array Example----------------------------------
console.log("---------------------------==Courses Array Example==--------------------------------")
// Defining an array of programming courses
let courses = ['JavaScript', 'Python', 'OOP', 'DSA', 'C++', 'Java'];
console.log(courses); // Output: Full array of courses
console.log(typeof courses); // Output: object (Arrays are a type of object in JavaScript)
console.log(Array.isArray(courses)); // Output: true (Confirms that 'courses' is an array)

// Checking the size (length) of the array
console.log("length of the courses :",courses.length); // Output: 6 (Number of elements inside the array)

// Accessing specific elements using indexes
console.log(courses[0]); // Output: JavaScript (first element, index 0)
console.log(courses[2]); // Output: OOP (third element, index 2)
console.log(courses[courses.length - 1]); // Output: Java (last element)
console.log(courses[courses.length - 2]); // Output: C++ (second last element)
console.log(courses[courses.length - 3]); // Output: DSA (third last element)


// ---------------------------Student 1 Courses Example-------------------------
console.log(" -------------------------==Student 1 Courses Example==-----------------------")
// Defining courses for Student 1
let student1Courses = ['OOP', 'DSA', 'C++', 'Java'];
console.log(student1Courses); // Output: Student 1 course list
console.log(typeof student1Courses); // Output: object
console.log(Array.isArray(student1Courses)); // Output: true

// Size of Student 1's course array
console.log("length of the courses :",student1Courses.length); // Output: 4

// Accessing specific courses
console.log(student1Courses[0]); // Output: OOP
console.log(student1Courses[2]); // Output: C++
console.log(student1Courses[student1Courses.length - 1]); // Output: Java
console.log(student1Courses[student1Courses.length - 2]); // Output: C++


// ---------------------------Student 2 Courses Example-------------------------
console.log("-------------------------==Student 2 Courses Example==------------------------")
// Defining courses for Student 2
let student2Courses = ['JavaScript', 'Python', 'OOP'];
console.log(student2Courses); // Output: Student 2 course list
console.log(typeof student2Courses); // Output: object
console.log(Array.isArray(student2Courses)); // Output: true

// Size of Student 2's course array
console.log("length of the courses :",student2Courses.length); // Output: 3

// Accessing specific courses
console.log(student2Courses[0]); // Output: JavaScript
console.log(student2Courses[2]); // Output: OOP
console.log(student2Courses[student2Courses.length - 1]); // Output: OOP
console.log(student2Courses[student2Courses.length - 2]); // Output: Python


// ---------------------------Student 3 Courses Example-------------------------
console.log("-------------------------==Student 3 Courses Example==-----------------------")
// Defining courses for Student 3
let student3Courses = ['OOP', 'DSA', 'JavaScript', 'Python'];
console.log(student3Courses); // Output: Student 3 course list
console.log(typeof student3Courses); // Output: object
console.log(Array.isArray(student3Courses)); // Output: true

// Size of Student 3's course array
console.log("length of the courses :",student3Courses.length); // Output: 4

// Accessing specific courses
console.log(student3Courses[0]); // Output: OOP
console.log(student3Courses[2]); // Output: JavaScript
console.log(student3Courses[student3Courses.length - 1]); // Output: Python
console.log(student3Courses[student3Courses.length - 2]); // Output: JavaScript


// -----------------------------Car Brands Example 1--------------------------------
console.log("---------------------------==Car Brands Example 1==-----------------------------")
// Defining an array of car brands
let carBrands = ['Toyota', 'BMW', 'Honda', 'Mercedes Benz'];
console.log(carBrands); // Output: Full array of car brands
console.log(typeof carBrands); // Output: object
console.log(Array.isArray(carBrands)); // Output: true

// Size of the array
console.log(carBrands.length); // Output: 4

// Accessing brands using index
console.log(carBrands[0]); // Output: Toyota
console.log(carBrands[2]); // Output: Honda
console.log(carBrands[carBrands.length - 1]); // Output: Mercedes Benz
console.log(carBrands[carBrands.length - 2]); // Output: Honda


// -----------------------------Car Brands Example 2 using Template Strings-----------------------------
console.log("---------------------------==Car Brands Example 2 ==-----------------------------")
// Defining another array with a different variable name to avoid redeclaration error
let brandofCars = ['Toyota', 'BMW', 'Honda', 'Mercedes Benz'];
console.log(brandofCars); // Output: ['Toyota', 'BMW', 'Honda', 'Mercedes Benz']
console.log(typeof brandofCars); // Output: object
console.log(Array.isArray(brandofCars)); // Output: true

// Using template strings to dynamically insert values in the output
console.log(`Total number of car brands: ${brandofCars.length}`);

// Accessing brands using template literals
console.log(`The first brand is: ${brandofCars[0]}`);
console.log(`The third brand is: ${brandofCars[2]}`);
console.log(`The last brand is: ${brandofCars[brandofCars.length - 1]}`);
console.log(`The second last brand is: ${brandofCars[brandofCars.length - 2]}`);

//why we use this-----?

// typeof → checks the type of the variable. Arrays are technically objects in JavaScript.
// Array.isArray() → to confirm if a variable is truly an array (not just any object).
// length → to find how many elements are in the array.
// [index] → to access individual items inside the array using their position.
// Template Strings → to make your console output more dynamic, readable, and flexible.











