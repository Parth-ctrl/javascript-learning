const accountId = 1234567890;
let accountName ='Parth Saini';
var accountEmail = 'parth.saini@example.com';
accountCity = 'New York';
let accountState;

accountName = 'Parth Saini Updated';
accountEmail = 'parth.saini.updated@example.com';
accountCity = 'Los Angeles';

console.log(accountId);
console.log(accountState);
console.table({accountId, accountName, accountEmail, accountCity, accountState});
console.table([accountId, accountName, accountEmail, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

abc="shubham" // I am not declaring the variable, so it will be created in the global scope. It is not a good practice to create variables in the global scope because it can lead to unexpected behavior and bugs in your code. Always declare your variables using let or const to avoid this issue.
console.log(abc)