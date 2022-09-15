//Traditional way of writing a function

function multiply(x){
        return x*x;
}


//Using arrow function
const multiply = (x) =>{
    return x*x;
}

/*===== OR =====*/

const multiply = (x) => x*x;  // function expression in single line

/*===== OR =====*/

const multiply = x => x*x;

//Arrow function with no argument
const getDate = () => new Date();

//Arrow function with 2 argument

const getFullName = (firstName, lastName ) => firstName + " " + lastName;

