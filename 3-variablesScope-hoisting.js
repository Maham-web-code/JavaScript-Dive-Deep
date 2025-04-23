// ---------------------- const Declaration ----------------------
// 'const' must be initialized at the time of declaration.
// It creates a block-scoped constant, which cannot be reassigned or redeclared in the same scope.

const PI = 3.14; // Constant value initialized at declaration
console.log(PI); // Output: 3.14

// const PI;
// PI = 3.14; // Error: const declarations must be initialized when declared



console.log(
  "------------------------ Redeclaration of Variables & Scope ------------------"
);

// ------------------------ Redeclaration Rules ------------------------
// 'var' allows redeclaration in the same scope.
// 'let' and 'const' do not allow redeclaration in the same scope.
// However, 'let' and 'const' can be declared again in a new (block) scope.

var familyName = "Ali";
var familyName = "Khan"; // Allowed: 'var' supports redeclaration
console.log(familyName); // Output: Khan

let familyName1 = "Ali";
// let familyName1 = "Khan"; // Error: 'familyName1' has already been declared in this scope
console.log(familyName1); // Output: Ali



console.log(
  "----------------------------- Scope of Variables ----------------------------------"
);

// ----------------------------- Scope Explanation -----------------------------
// 'var' has function scope: available throughout the function where it's declared.
// 'let' and 'const' have block scope: available only within the block (like if, loop, function) where they're declared.


// ---------------- Example 1: Function Scope ----------------

let familyName2 = "Aliyan";

function showFamilyName() {
  // This is a new 'familyName2', scoped only within this function
  let familyName2 = " hadeer "; 
  console.log("Inside function (local scope):", familyName2); // Output: Khan
}

showFamilyName();
console.log("Outside function (global scope):", familyName2); // Output: Ali



// ---------------- Example 2: Block Scope ----------------

let bookTitle = "The Alchemist";

if (bookTitle === "The Alchemist") {
  {
    let bookPrice = 1000; // Declared inside this inner block
    console.log("Book Price inside block:", bookPrice); // Output: 1000
  }
  // console.log(bookPrice); // Error: bookPrice is not accessible here (outside its block)
} else {
  let bookPrice = 2000;
  console.log("Book Price in else block:", bookPrice); // Output: 2000
}

// 'var' variables are not block-scoped, so redeclaration is allowed globally or functionally
var author = "Paulo Coelho";
var author = "J.K. Rowling"; // Redeclared and reassigned
console.log("Author:", author); // Output: J.K. Rowling



// ---------------- Example 3: Block vs Function Scope ----------------

let letscopecheck = 1;
let letscopecheck2 = 1; // Global variable

if (true) {
  let letscope = 2;
  letscope++; // Increment: adds 1 → letscope becomes 3

  let letscopecheck = 2;
  letscopecheck++; // Increment: adds 1 → letscopecheck becomes 3
  console.log("letscopecheck inside block:", letscopecheck); // Output: 3 (this is local to the block)

  // Accessing global variable inside block
  console.log("letscopecheck2 inside block (from outer scope):", letscopecheck2); // Output: 1

  var varscope = 2;
  varscope++; // Increment: adds 1 → varscope becomes 3
}

console.log("varscope outside block:", varscope); // Output: 3 — 'var' is not block-scoped, so accessible here
console.log("letscopecheck outside block:", letscopecheck); // Output: 1 — original global variable



// ---------------- Example 4: Function Scope ----------------

function letvarscope() {
  let scopelet = 1; // Block-scoped inside the function
  var scopevar = 2; // Function-scoped inside the function
}

// console.log(scopelet); // Error: Not accessible outside function
// console.log(scopevar); // Error: Also not accessible outside function

//---------------------------Example 5: declared with function for both let and var----------------
function letvarscope() {
    let scopelet = 1; 
    console.log(scopelet )
    var scopevar = 2; 
    console.log(scopevar )
  }
letvarscope();
//both let and var function gives output "1"and "2"

console.log(
  "----------------------------- Hoisting in JavaScript ----------------------------------"
);

// ----------------------------- Hoisting Explanation -----------------------------
// Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope.
// Only declarations are hoisted, not initializations.

// 'var' declarations are hoisted and initialized to undefined
console.log(hoistedVar); // Output: undefined (declared but not yet assigned)
var hoistedVar = "I am hoisted";
//if i call hoisted after declaration then it gives output like'I am hoisted'
// console.log(hoistedVar);

// 'let' and 'const' declarations are hoisted, but are not initialized
// Accessing them before declaration results in a ReferenceError due to the "Temporal Dead Zone"

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am let";

// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am const";
