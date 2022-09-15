/*===========  Object Destructuring */
const user = {
    userName : "John",
    age:25,
    address:"Delhi",
    phoneNumber : "1234567890",
}

const { userName, age } = user;
console.log(userName);

//Renaming field while destructuring
const {userName : name, address} = user;
console.log(name);

//Default Value
const {gender = "Unknown"} = user;
console.log(gender);

/* ===== Array Destructuring ====== */

const players = ["Sachin", "Dhoni", "Rahul", "Virat"]

const [p1,p2, ,p4] = players;

console.log("Player 1 ", p1);
console.log("Player 2 ", p2);
console.log("Player 4 ", p4);

//Example two
const fullName = "John Smith";

const [firstName, lastName]= fullName.split(" ");

console.log("First Name ", firstName);
console.log("Last Name ", lastName);