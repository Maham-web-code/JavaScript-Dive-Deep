// -------------------------Objects in JavaScript-------------------------
// - Objects are collections of key-value pairs.
// - Keys are called properties, and values can be any data type (string, number, array, function, etc.).
// - Objects can also contain methods (functions defined inside them).

// -------------------------Example: Student Object-------------------------

// Student 1: Object representing a student with properties and a method
let student1 = {
    name: "John Peter",                       // String property
    age: 22,                                  // Number property
    batch: "2022-26",                         // String property
    courses: ["JavaScript", "Python", "OOP", "DSA"], // Array property
    isEnrolled: true,                         // Boolean property
  
    // Method to return a badge message
    badge: function () {
      return `${this.name} is the Class Representative (CR).`;
    },
  };
  
  // Accessing student object properties and method
  console.log(student1.name);    // Outputs: John Peter
  console.log(student1.age);     // Outputs: 22
  console.log(student1.batch);   // Outputs: 2022-26
  console.log(student1.courses); // Outputs: [ 'JavaScript', 'Python', 'OOP', 'DSA' ]
  console.log(student1.isEnrolled); // Outputs: true
  console.log(student1.badge()); // Outputs: John Peter is the Class Representative (CR).
  
  // -------------------------Example: Hotel Object-------------------------
  
  let hotel = {
    hotelName: "Serena Hotel",       // Name of the hotel
    location: "Islamabad",            // Location of the hotel
    roomsAvailable: 100,              // Number of available rooms
    rating: 4.5,                      // Hotel rating
    amenities: ["Free WiFi", "Pool", "Gym", "Restaurant", "Spa"], // Amenities offered
  
    // Method to describe the hotel
    description: function () {
      return `${this.hotelName} is one of the best hotels in ${this.location}!`;
    },
  };
  
  // Accessing hotel object properties and method
  console.log(hotel.hotelName);      // Outputs: Serena Hotel
  console.log(hotel.location);       // Outputs: Islamabad
  console.log(hotel.roomsAvailable); // Outputs: 100
  console.log(hotel.rating);         // Outputs: 4.5
  console.log(hotel.amenities);      // Outputs: [ 'Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa' ]
  console.log(hotel.description());  // Outputs: Serena Hotel is one of the best hotels in Islamabad!
  
  // -------------------------Example: Clothing Brand Object-------------------------
  
  let clothingBrand = {
    brandName: "Maha's Clothing House",      // Brand Name
    location: "Lahore",                      // Store location
    rating: 4.2,                             // Customer rating
    revenue: "Annual revenue between 50,000 to 150,000 USD", // Revenue description
    genderTarget: "For All (Men and Women)", // Target customers
  
    // Collections offered by the brand
    womenCollections: [
      "Summer Collection",
      "Printed Lawn Collection",
      "Winter Collection",
      "Karandi Collection",
      "Khaddar Collection",
      "Silk Collection",
    ],
  
    menCollections: [
      "Summer Collection",
      "Winter Collection",
      "Karandi Collection",
    ],
  };
  
  // Accessing clothing brand object properties
  console.log(clothingBrand.brandName);        // Outputs: Maha's Clothing House
  console.log(clothingBrand.location);         // Outputs: Lahore
  console.log(clothingBrand.rating);           // Outputs: 4.2
  console.log(clothingBrand.revenue);           // Outputs: Annual revenue between 50,000 to 150,000 USD
  console.log(clothingBrand.genderTarget);      // Outputs: For All (Men and Women)
  console.log(clothingBrand.womenCollections); // Outputs: Array of women's collections
  console.log(clothingBrand.menCollections);   // Outputs: Array of men's collections
  