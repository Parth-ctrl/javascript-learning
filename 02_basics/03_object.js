// Singleton
// Object.create


// Object Literals
const mySym = Symbol("key1"); // Creates a unique Symbol

let JsUser = {
    name: "Parth",
    "role": "Admin", // Key can also be written inside quotes
    age: 18,

    [mySym]: "mykey", // Uses the Symbol as the key

    location: "Jaipur",
    email: "test@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "TuesDay"],

    mySym: "myKey1" // This is a normal string key "mySym", NOT the Symbol
};

// console.log(JsUser);

console.log(JsUser.email);       // Dot notation
console.log(JsUser["email"]);    // Bracket notation

console.log(JsUser["age"]);      // Access "age" using bracket notation
console.log(JsUser["role"]);     // Access "role" using bracket notation

console.log(JsUser[mySym]);      // Access the property using the Symbol
console.log(JsUser["mySym"]);    // Access the normal string key "mySym"

console.log(Object.keys(JsUser)[3]); 
// Object.keys() returns only string keys, so Symbol key is not included

console.log(typeof Object.keys(JsUser)[3]);
// The key returned by Object.keys() is a string

console.log(Object.keys(JsUser));
// Object.keys() returns only the object's string keys, not Symbol keys

console.log(JsUser);
// The whole object shows both string keys and the Symbol key


JsUser.email = "test_1@gmail.com";
// Changes the email value

Object.freeze(JsUser);
// Freezes the object, so its properties cannot be changed, added, or deleted

JsUser.email = "test_2@gmail.com";
// This change will NOT work because the object is frozen

console.log(JsUser.email);
// Output: test_1@gmail.com


JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());