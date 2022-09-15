//Spread Operator with Object

let user = {
    name: "John",
    age: 25
}

//expanded in places
const user1 = {
    ...user,
    address: "Delhi",
    age: 20
}

//Output { name: 'John', age: 25, address: 'Delhi' }
console.log(user1);


//Spread operator with Array

const nums = [1, 2, 3, 4, 5];

const nums1 = [...nums, 6, 7];

console.log(nums1);

//Array into Object with key pair where index will be key name
const numObj = { ...nums };
console.log(numObj);


//Rest Operator
function getSumOfNumbers(...numbers) {
    console.log(numbers);
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

const sumResult = getSumOfNumbers(2, 3, 4);

console.log(sumResult);


//Reference type and Primitive Type

const person = {
    name:"William",
    country :"USA",
    phone:"342342"
}

const person2 = person;
person2.name = "Harry";  //Reference type change

//Output : { name: 'Harry', country: 'USA', phone: '342342' }
console.log(person);

const person3 = {...person};

person3.name = "Kathy";

console.log(person3 , person)