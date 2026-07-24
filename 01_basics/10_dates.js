// const date = new Date();
// console.log(date); // Current date and time. Object
// console.log(date.toISOString()); // Current date and time in ISO format. String
// console.log(date.toDateString()); // Current date in human-readable format. String
// console.log(date.toTimeString()); // Current time in human-readable format. 
// console.log(date.toLocaleString()); // Current date and time in local format.
// console.log(date.getFullYear()); // Current year. Number
// console.log(date.getMonth()); // Current month (0-11)
// console.log(date.getDate()); // Current day of the month (1-31)
// console.log(date.getDay()); // Current day of the week (0-6, Sunday is 0)
// console.log(date.getHours()); // Current hour (0-23)
// console.log(date.getMinutes()); // Current minutes (0-59)
// console.log(date.getSeconds()); // Current seconds (0-59)

let myCreatedDate = new Date(2023, 0, 23); // 23 January 2023, 12:00:00
// console.log(myCreatedDate.toLocaleString());

// myCreatedDate = new Date(2023, 0, 23, 5, 3); // 23 January 2023, 05:03:00
// console.log(myCreatedDate.toLocaleString()); 

myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); // 14 January 2023, 00:00:00

myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 14 January 2023, 00:00:00

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp); // Current timestamp in milliseconds. Number
console.log(myCreatedDate.getTime()); // Timestamp of the created date in milliseconds. Number
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds. Number

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


console.log(
  newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
  })
);