//1: Greet Function
//call a function 3 times 
function greet(){
    console.log("Hello world");
}
greet();
greet();
greet();
 //function to addition of two num1 and num2
 function Addition(num1,num2){
    console.log("The sum of two numbers are:",num1+num2);
  
  }
  Addition(5,10);
   Addition(20,30);
   Addition(100,200);
  
//greetPerson function
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}
greetPerson("Alice");
greetPerson("Bob");
greetPerson("Charlie");
//print table 
//make function print table
function printTable(number){
  console.log("Printed Table Are given ");
  console.log(number*1);
  console.log(number*2);
  console.log(number*3);
  console.log(number*4);
  console.log(number*5);
}
printTable(2);
//Favorite Things
function favoriteThings(thing1, thing2){
  console.log("My Fvaorite Things ")
   console.log("I love " + thing1 + " and " + thing2)
   
}
favoriteThings("Pizza", "Ice Cream");
favoriteThings("Books", "Movies");
favoriteThings ("Dogs", "Cats");
//Function to Create a Full Address
function createAddress(houseNumber, streetName, city) {
    return houseNumber + ", " + streetName + ", " + city;
  }
  const fullAddress = createAddress(33, "Iqbal Block", "Lahore");
  console.log(fullAddress);
