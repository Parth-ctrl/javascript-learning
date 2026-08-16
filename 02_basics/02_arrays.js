const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]

// marvel_heroes.push(dc_heroes); // push() adds the complete DC array as one element inside Marvel array. changes the original array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// const allHeroes = marvel_heroes.concat(dc_heroes); // concat() combines two arrays and returns a new array
// console.log(allHeroes)

// const allNewHeroes = [...marvel_heroes, ...dc_heroes]; // Spread operator (...) spreads all elements of an array into a new array
// console.log(allNewHeroes);

// const another_arry = [0, 1, 5, 3,[6,7,[4, 5]]];

// flat() removes nested arrays and returns a new array
// Infinity means flatten all levels of nested arrays

// const real_another_arr = another_arry.flat(Infinity);
// console.log(real_another_arr);

// isArray() → checks if the given value is an array
console.log(Array.isArray("Parth")); // false


// from() → converts an iterable or array-like value into an array
console.log(Array.from("Parth")); // ["P", "a", "r", "t", "h"]


// Object is not iterable, so it cannot be converted into an array this way
console.log(Array.from({ name: "Parth" })); // []

let obj = {
    0: "Parth",
    1: "Saini",
    length: 2
};

// from() → converts an array-like object into an array
// The object needs numeric keys (0, 1, ...) and a length property
console.log(Array.from(obj)); // ["Parth", "Saini"]


let score1 = 100;
let score2 = 200;
let score3 = 300;


// of() → creates a new array from the given values
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]