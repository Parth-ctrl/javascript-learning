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

