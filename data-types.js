/*=========== var ================= */

var amount = 100;
console.log("Amount is ", amount);

var amount = 150;  // re-declared same variable name is allowed with var
console.log("Amount is ", amount);


function displayUserName(){
    let isLoggedIn = true;
    if(isLoggedIn){
        var userName = "John";
        console.log("userName inside if block ", userName);
    }
    //Accessable outside if block because of var has function scope
    console.log("Accessing userName outside if block ", userName);  
}

displayUserName();

/*=========== let ================= */

let price = 100;
console.log("Price is ", price);

let price = 150;  // re-declared same variable name is not allowed with let
console.log("Price is ", price);


function displayPrice(){
    let isTrue = true;

    if(isTrue){
        let value = 500;
        console.log("value inside if block ", value);
    }
    //Not Accessable outside if block because of let has block scope
    console.log("Accessing value outside if block ", value);  
}

displayPrice();

/*=========== const ================= */

/**If the variable is declared with  const then it cannot be re initialized */

const PI = 3.141;

console.log("Value of PI is ", PI);

PI = 22/7;  // Re initialization is not allowed

console.log(PI);