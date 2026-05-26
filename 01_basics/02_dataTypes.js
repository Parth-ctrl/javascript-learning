//"use strict"; // treat all JS code as newer version
// name = "Parth";

// console.log(name);

// alert("Hello World"); // we are using node js so alert will not work, not in browser

// Data types in JS
// 1. Primitive data types
// 2. Non-primitive data types

// Primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol  
// 7. BigInt

// Non-primitive data types
// 1. Object
// 2. Array
// 3. Function

// Primitive data types are immutable, they cannot be changed, when we change the value of a primitive data type, a new memory location is created and the new value is stored in that memory location, the old memory location is not changed, it still holds the old value, this is called immutability

// Two types of Primitive data types
// Numeric data types: Number, BigInt
// Non-numeric data types: String, Boolean, Null, Undefined, Symbol

// Numberic data types
// Number
let age = 25;
console.log(age);
console.log(typeof age);

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
console.log(typeof bigIntValue);


// Non-numeric data types
// String
let name = "Parth Saini";
console.log(name);
console.log(typeof name);


// Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Null
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue); // this will return object, this is a bug in JS

// Undefined
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

// Symbol
let symbolValue = Symbol("unique");
console.log(symbolValue);
console.log(typeof symbolValue);

// Non-primitive data types are mutable, they can be changed, when we change the value of a non-primitive data type, the same memory location is used and the new value is stored in that memory location, this is called mutability

// Non-primitive data types
// 1. Object
// 2. Array
// 3. Function

// Object
let person = {
    name            : "Parth Saini",
    age             : 25,
    isStudent       : true,
    hobbies         : ["coding", "reading", "gaming"],
    address         : {
        city        : "New York",
        state       : "NY",
        country     : "USA"
    },
    greet           : function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person);
console.log(typeof person);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers); // this will return object, because arrays are objects in JS

// Function
function greet() {
    console.log("Hello World");
}

console.log(greet);
console.log(typeof greet);  

