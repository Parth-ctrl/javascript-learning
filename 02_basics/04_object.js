// const user = new Object(); // Creates a Singleton object

const user = {}; // Creates an empty object using object literal syntax (Non-Singleton)
user.id = "3543REFE";
user.name = "Sanjay";
user.role = "user"

// console.log(user); // Prints the object

const regularUser ={
    email:"test@gmail.com",
    // Nested object
    fullname:{
        userfullname:{
            firstname:"Parth",
            lastname:"Saini",
        }
    }
}
// Accessing a deeply nested property using dot notation
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" };

const obj2 = { 2: "a", 3: "b" };

// const obj3 = { obj1, obj2 };
// This creates a new object containing obj1 and obj2 as separate properties

// const obj3 = Object.assign({}, obj1, obj2);
// First argument {} → Target object (new empty object)
// obj1, obj2 → Source objects whose properties are copied into the target
// If the same key exists, the value from the later object overwrites the previous value

const obj3 = {...obj1, ...obj2};
// ...obj1 → copies properties from obj1
// ...obj2 → copies properties from obj2
// Creates a new object, so obj1 and obj2 are not modified
// If the same key exists, obj2's value overwrites obj1's value

// console.log(obj3); // { 1: "a", 2: "a", 3: "b" }


const users = [
    {
        id: 1,
        email: "test@gnmail.com"
    },
    {
        id: 2,
        email: "test_2@gnmail.com"
    },
    {
        id: 3,
        email: "test_3@gnmail.com"
    },
];

// Access the 2nd object using index [1], then access its email property
// console.log(users[1].email); // test_2@gnmail.com

// // Access the 3rd object using index [2], then access its email property
// console.log(users[2].email); // test_3@gnmail.com

// console.log(Object.keys(user));
// // Object.keys() → returns all object keys as an array
// console.log(Object.keys(user).length);
// // Object.keys() → gets all object keys as an array
// // .length → gets the number of keys/properties in the object

// console.log(Object.values(user));
// // Object.values() → returns all object values as an array
// // Arrays make it easy to access and loop through the keys/values

// console.log(Object.entries(user));
// // Object.entries() → returns all key-value pairs as an array

// console.log(user.hasOwnProperty("id"));
// // hasOwnProperty() → checks if the object has its own property with the given key

// console.log(user.hasOwnProperty("isLoggedIn"));
// Returns true if "isLoggedIn" exists in user, otherwise false

let course = {

    courseName: "Js In Hindi",

    fees: 999,

    couserInstructor: "Hitesh",

}

console.log(course.couserInstructor);
// Accessing the property using dot notation


const { couserInstructor } = course;
// Destructuring: gets couserInstructor from course and stores it in a variable with the same name

console.log(couserInstructor);
// Accessing the extracted value directly


const { couserInstructor: Instructor } = course;
// Destructuring with a new variable name: couserInstructor → Instructor

console.log(Instructor);
// Accessing the value using the new variable name