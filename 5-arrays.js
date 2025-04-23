console.log("--------------------Example 1 (courses)---------------------------")
// ------------------------------- Example 1 -------------------------------

// Array of courses
let courses = ['JavaScript', 'Python', 'OOP', 'DSA'];

// Display the array of courses
console.log(courses); // Outputs: ['JavaScript', 'Python', 'OOP', 'DSA']

// Check the type of 'courses'. Arrays in JavaScript are technically objects.
console.log(typeof courses); // Outputs: 'object' (arrays are objects in JavaScript)

// Check if 'courses' is an actual array using Array.isArray().
console.log(Array.isArray(courses)); // Outputs: true (checks if 'courses' is an array)

// ------------------- Size of the array (number of courses) -------------------
console.log(courses.length); // Outputs: 4 (length of the array)

// ------------------- Accessing elements by index -------------------
// Accessing elements by index (arrays in JS are zero-indexed).
console.log(courses[0]); // Outputs: 'JavaScript' (first element)
console.log(courses[2]); // Outputs: 'OOP' (third element)
console.log(courses[courses.length - 1]); // Outputs: 'DSA' (last element)
console.log(courses[courses.length - 2]); // Outputs: 'OOP' (second last element)


// ------------------------------- Example 2 -------------------------------
console.log("--------------------Example 2 (car Brands)---------------------------")
// Array of car objects - Each object represents a car with brand, model, and price.
let cars = [
    { brand: 'Toyota', model: 'Corolla', price: 3000000 },
    { brand: 'Honda', model: 'Civic', price: 4200000 },
    { brand: 'Suzuki', model: 'Alto', price: 1800000 },
    { brand: 'Kia', model: 'Sportage', price: 7000000 }
];

// ------------------- Display all cars -------------------
console.log("All Cars:");
// Loop through the 'cars' array and print each car's details.
for (let car of cars) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Price: Rs. ${car.price}`);
}

// ------------------- Find cars under 4 million -------------------
// .filter() creates a new array with all elements that pass the test implemented by the provided function.
//  we filter cars that cost less than 4 million.
let affordableCars = cars.filter(car => car.price < 4000000);
console.log("\nAffordable Cars (Under 4 Million):");
// Displaying cars that passed the price filter (under 4 million).
for (let car of affordableCars) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Price: Rs. ${car.price}`);
}

// ------------------- Find a specific car (e.g., Honda) -------------------
// .find() returns the first element in the array that satisfies the provided testing function.
// In this case, we're looking for a car with the brand 'Honda'.
let findHonda = cars.find(car => car.brand === 'Honda');
console.log("\nSearch Result (Honda):");
// Display the car object with the brand 'Honda' (first match).
console.log(findHonda);

// ------------------- Add a new car -------------------
// .push() adds a new element to the end of the array.
cars.push({ brand: 'Hyundai', model: 'Tucson', price: 6400000 });
console.log("\nAfter Adding Hyundai:");
// Displaying the updated list of cars after adding the Hyundai Tucson.
console.log(cars);

// ------------------- Remove a car by index -------------------
// .splice() is used here to remove the car at index 2 (which is 'Suzuki Alto').
// The first parameter is the index to start from, and the second parameter is the number of elements to remove.
cars.splice(2, 1); // Removes the third item (index 2)
console.log("\nAfter Removing Suzuki:");
// Displaying the list of cars after removing the Suzuki Alto.
console.log(cars);

// ------------------- Total number of cars now -------------------
console.log(`\nTotal Cars in List: ${cars.length}`); // Outputs the total number of cars in the array (after removal and addition).


// 1. **Array Methods Used:**
//    - **.filter()**: Creates a new array with all elements that pass the test implemented by the provided function.
//    - **.find()**: Returns the first element in the array that satisfies the provided function. It stops searching once it finds the first match.
//    - **.push()**: Adds one or more elements to the end of the array and returns the new length of the array.
//    - **.splice()**: Adds/removes items from an array at any index and can modify the array in place.
//    - **.length**: A property that returns the number of elements in the array.


