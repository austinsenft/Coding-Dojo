let globalNumber = 100; //global variable is outside of functions and loops


function addTwoNumbers( num1, num2) {
    let sum = num1 + num2;  //sum is a non-global variable. only avail in function
    return sum;
}

let result1 = addTwoNumbers( 10,20 );
console.log(result1);
let result2 = addTwoNumbers( 50, globalNumber ); 
console.log(result2);
let finalResult = addTwoNumbers(result1, result2); 
console.log (finalResult);