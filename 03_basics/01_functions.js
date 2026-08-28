// function greet(count) {

//     for (let i = 0; i < count; i++) {
//         console.log("Hello World");
//     }

// }

// greet(5);

// function greet (){
//     console.log("Hii");
//     console.log("Hii");
// }
// greet();


// function addTwoNumbers(Number1, Number2){
//     // console.log(Number1 + Number2)
//     let result = Number1 + Number2;
//     console.log("Hi")
//     return result;
// }

// // addTwoNumbers(1, 4)

// const result = addTwoNumbers(1, 4);
// console.log("Result:", result);


// function loginMessage(userName="Hitesh"){
//     if(!userName){
//         console.log("UserName Not Found")
//     }
//     else{
//     console.log(`${userName}, Is Logged In`)
//     }
// }

// loginMessage("Parth")


// function calculatePrice(...num){
//     return num;
// }

// console.log(calculatePrice(2, 4))

// const user = {
//     userName: "Parth",
//     price : 12
// }

// function handleUser(anyObject){
//     console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
// };

// // handleUser(user);
// handleUser({
//     userName: "Parth",
//     price : 12
// });

const Newuser = [200, 400, 600];

function returnSecondValue(getArray){
    return `Second Value: ${getArray[1]}`
}

// console.log(returnSecondValue(Newuser))
console.log(returnSecondValue([200, 400, 600]))