// Primitive data types

// 7 types of primitive data types in JS
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol  
// 7. BigInt
 const name = "John"; // String
 const age = 30; // Number
 const isStudent = true; // Boolean
 const address = null; // Null
 let phoneNumber; // Undefined

 const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
 const id = Symbol("id"); // Symbol
 const anotherId = Symbol("id"); // Symbol
 console.log(id === anotherId); // false // Symbol is unique and immutable


// Non-primitive data types(Reference data types)  

// 3 types of non-primitive data types in JS

// 1. Object
// 2. Array
// 3. Function

const heros =["spiderman", "ironman", "hulk"];
console.log(typeof heros); // object

let myObject = {
    name: "John",
    age: 30,
    isStudent: true
}

const myFunction = function(){
console.log("Hello World");
}

console.log(typeof myFunction); // function // Functions are actually objects in JavaScript, but typeof gives them a special return value "function" for convenience.

// Stack memory(Non-primitive data types are stored in heap memory) and Heap memory(Primitive data types are stored in stack memory)

let x = 10; // stored in stack memory
let y = x; // stored in stack memory

y = 20; // changing the value of y does not affect x

console.log(x); // 10
console.log(y); // 20

let obj1 = { name: "John" }; // stored in heap memory
let obj2 = obj1; // stored in heap memory

obj2.name = "Doe"; // changing the value of obj2 affects obj1

console.log(obj1.name); // Doe
console.log(obj2.name); // Doe

