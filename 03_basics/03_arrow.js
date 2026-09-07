const user = {
    userName: "Parth",
    price: 999,
    welcomMessage: function(){
        console.log(`${this.userName}, Welcome to website`)
        console.log(this)
    }

}

user.welcomMessage()
// user.userName = "Sam";
// user.welcomMessage()
console.log(this)

// function chai(){
//     console.log(this)
//     let userName ="Parth";
//     console.log(this.userName)
// }

// chai()

// const chai1 = function(){
//     console.log(this)
//     let userName ="Parth";
//     console.log(this.userName)
// }
// chai1()

const chai = () => {
    let userName ="Parth";
    console.log(this)
}

chai()

// const addTwo = (num1, num2) => {
// console.log(num1 + num2);
// };
// const addTwo = (num1, num2) => console.log(num1 + num2);
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) =>  ({userName: "parth"});

// addTwo(2,5)
// console.log(addTwo(2,5))
