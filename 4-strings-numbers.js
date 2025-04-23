// ---------------------------- Numbers in JavaScript ----------------------------

// Declaring a numeric value
const score = 50;

// Display the value of the variable 'score'
console.log(score);

// typeof is an operator used to check the data type of a value or variable
console.log(typeof score); // Output: 'number'


// ---------------------------- Strings in JavaScript ----------------------------

// A string is a sequence of characters (letters, numbers, symbols, etc.)
// Strings can be defined using either single ('') or double ("") quotes

let firstName = "harry";        // using double quotes
let password = 'harry@12345';   // using single quotes

// Displaying a string variable
console.log(firstName);

// You can combine strings and variables using comma (,) or plus (+) operators
console.log("First Name =", firstName);
console.log("Password =", password);

// typeof is used again to confirm the data type
console.log(typeof password); // Output: 'string'

// ------------------ Dynamic Typing in JavaScript ------------------
// JavaScript is a dynamically typed language, which means:
// - You don't need to declare the data type of a variable
// - A variable can hold values of different types at different times

// For example: The variable 'password' initially holds a string
// Now we assign a number to the same variable
password = 55000;

// Display the updated value and type
console.log(password);         // Output: 55000
console.log(typeof password); // Output: 'number'

// Always use meaningful variable names to avoid confusion when data types change.


// -------------------------- Escape Characters in Strings --------------------------

// Escape characters are special characters used inside strings to format them properly

// \n -> New line
// \t -> Tab space
// \\ -> Backslash character
// \' -> Single quote
// \" -> Double quote

let multilineDescription = "Code: Axb1234 \nMaterial: Cotton \nColors: Red, Blue, Green \nSize: S, M, L, XL";

// \n adds new lines inside the string
console.log(multilineDescription);

// -------------------- Template Literals (Template Strings) --------------------

// Template literals are strings wrapped with backticks (``) instead of quotes
// They allow:
// 1. Multiline strings without needing \n
// 2. String interpolation using ${} to embed variables directly inside a string

// Multiline string example using template literals
let description = `Code: Axb1234
Material: Cotton 
Colors: Red, Blue, Green
Size: S, M, L, XL`;

console.log(description);

// -------------------- String Interpolation Example 1 --------------------

let student_name = "henry";
let batch = 3;
let course_name = "JS";

// Traditional way of combining strings and variables (without interpolation)
console.log('Student name is ', student_name, '\nBatch is', batch, '\nCourse name is ', course_name);

// Better and cleaner way using template literals (with interpolation)
console.log(`Student Name is ${student_name}
Batch is ${batch}
Course Name is ${course_name}`);
// -------------------- String Interpolation Example 2 --------------------
let product_name = "Wireless Mouse";
let price = 1500;
let brand = "LogiTech";

// Traditional way of combining strings and variables (without interpolation)
console.log('Product:', product_name, '\nPrice:', price, '\nBrand:', brand);

// Cleaner and easier way using template literals
console.log(`Product: ${product_name}
Price: ${price}
Brand: ${brand}`);

//  Always use template literals for better readability, especially when combining multiple variables and strings.
