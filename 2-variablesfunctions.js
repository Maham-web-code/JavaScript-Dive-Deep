//----------------------------------Memory Creation Phase-----------------------------------
// Variables declared with var are hoisted and initialized as undefined.
// Functions are fully hoisted (entire function is stored in memory).
// Space is reserved for variables and functions during this phase.

//----------------------------------Execution Phase--------------------------------------
// In this phase, the code is executed line-by-line, and variables/functions get actual values.

//----------------------------------Function: greeting-----------------------------------
function greeting(){
    console.log("Hi, Maham let's start working");
}

greeting();  // Function call – this will run immediately

//----------------------------------Memory Creation Phase Simulation-----------------------
// Variables are hoisted and initialized with undefined during memory creation.
// The following lines show what memory might look like before execution:

// first_name -------> undefined
// last_name --------> undefined

// The function declarations are fully hoisted as well.
// greetfirst_name() and greetlast_name() are available before execution.

//----------------------------------var Keyword Example---------------------------------------
console.log("---------------------------------var keyword---------------------------------------");

//---------------------------Memory Execution Phase--------------------
// Variable and function execution in actual order.
console.log(first_name);  // Output: undefined (due to hoisting)
greeting();               // Function is hoisted and callable

var first_name = "jonny";  // Variable gets assigned during execution

function greetfirst_name() {
    console.log("I am " + first_name);  // Uses the updated value
}
greetfirst_name();  // Output: I am jonny

var last_name = "dona";  // Same as above

function greetlast_name() {
    console.log("I am " + last_name);
}
greetlast_name();  // Output: I am dona

//----------------------------Addition Method---------------------------------------------
var sum = 5 + 4;
function addition() {
    console.log("The sum of x and y is: " + sum);  // Output: The sum of x and y is: 9
}
addition();

//----------------------------Subtraction Method------------------------------------------
var substract = 5 - 4;
function substraction() {
    console.log("The subtraction of x and y is: " + substract);  // Output: The subtraction of x and y is: 1
}
substraction();

//----------------------------------let Keyword---------------------------------------
console.log("----------------------------------let keyword---------------------------------------");

console.log(instructor); // Output: undefined (due to var declaration below)
// let instructor = "Muqaddas Zahra"; // Would throw ReferenceError due to Temporal Dead Zone (TDZ)
var instructor = "Muqaddas Zahra";    
console.log(instructor); // Output: Muqaddas Zahra

var instructor = "Maham Fatima";      
console.log(instructor); // Output: Maham Fatima

// Cannot redeclare a variable with let if it was already declared with var
// let sum = 5 + 4;  // Error: Identifier 'sum' has already been declared

// Uncommenting this will throw an error due to redeclaration

// function addition() {
//     console.log("The sum of x and y is: " + sum);
// }
// addition();

//--------------------------------------------const Keyword----------------------------------
console.log("--------------------------------const keyword----------------------------------");

const INSTRUCTOR = "Muqaddas Zahra";
console.log(INSTRUCTOR); // Output: Muqaddas Zahra

// INSTRUCTOR = "Maham Fatima"; // Error: Assignment to constant variable
console.log(INSTRUCTOR); // Output: Muqaddas Zahra

//----------------------------------Redeclaration of Variables----------------------------------
console.log("------------------------redeclaration of variables----------------------------");

// var familyname("zobi"); // Incorrect syntax (should be =, not ())
// var familyname("zaid"); // Same as above
// console.log(familyname); // These lines would cause errors if uncommented

//----------------------------------------let - No Redeclaration Allowed----------------------
let familyname1 = "zobi"; 
let familyname2 = "zaid"; 
// let familyname1 = "alex"; // Error: Identifier 'familyname1' has already been declared

console.log(familyname2); // Output: zaid

//----------------------------------Scope of Variables----------------------------------------
console.log("------------------------------Scope of Variables-------------------------");

function showfamilyname() {
    let familyname1 = "zaid";  // Local variable, only inside function
    console.log("Function scope:", familyname2); // Uses the outer (global) variable
}

console.log("Global scope", familyname2); // Output: zaid
showfamilyname(); // Output: Function scope: zaid
