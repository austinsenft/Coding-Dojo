//For Loop 
// for (var i = 2020; i > 1; i-=4){ 
//     console.log(i);
// } 
// 
// While Loop 
// var number = 2020 
// while (number > 1) { 
//     console.log(number); 
//     number -=4; 
// } 


function flexCount(lowNum, highNum, mult) {
    for (var i = highNum; i > lowNum; i--) { 
        if (i % mult == 0) { 
            console.log(i);
        }        
    } 
}
flexCount(2, 9, 3); 



//flexCount(2, 16, 3); 

//modulus operator  
// 12 % 4 => 0
// 8 % 3 => 2 
// 9 % 3 => 0 
// 9 % 2 => 1

// Level Up: Flexible Countdown
// Based on Countdown by fours, write a function that, given parameters of "lowNum", "highNum", and "mult", 
// print all multiples of "mult" from "highNum" to "lowNum" using a for loop
// Example: flexCount(2,9,3), it will print 9 6 3 on successive lines.
// Example: flexCount(2,16,3), it will print 15 12 9 6 3 on successive lines. 


//check if odd or even 
//A quick little function that might help explain using Modulus. 
//As per what Shawn had said, it is most often used for an odd/even check.  
//(Remainder of 0 = evenly divisible, else it has a remainder.) 

function ModulusExample(num, div) {
    let remainder = num % div;
    if (num % div == 0) {
        return `${num} divisible evenly by ${div}`
    } else {
        return `${num} not divisible evenly by ${div}! \n Remainder: ${remainder}`
    }
};

console.log(ModulusExample(12, 5)) 



// Week 2 Day 3
// EVENS AND ODDS!
 
// Create a function that accepts an array of numbers. Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
// in a row, print "Even more so!"
 
// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive
// even values, it should print the message two times.

// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!
 
// ------------------------------------
// [1,2,3,4,5,6,7,8]
// OUTPUT:
 
// ------------------------------------
// [2,2,1,1,6,6,5,5,5]
// OUTPUT:
// That's odd!
 
// ------------------------------------
// [1,1,1,3,3]
// OUTPUT:
// That's odd! 

let even = 0 
let odd = 0
var arr1 = [1,3,5,8,8,8] 
function evensOdds() {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] %2 == 0) {
            even++; 
        } 
            if ( even = 3) {
                console.log ('Even more so') } 
                else { even = 0 
                } 
        if (arr1[i] %2 !== 0) {
            odd++;
        }
            else { odd = 0
    } 
        if (odd = 3) { 
    console.log ('Thats odd') }
}
} 
evensOdds(arr1);


//solution 
var arr1 = [17, 3, 5, 7, 6, 2, 4, 6,];
var tacoMeat;
function tacos(arr) {
  var oddCounter = 0;
  var evenCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    tacoMeat = arr[i];
    if (tacoMeat % 2 === 1) {
      oddCounter++;
      evenCounter = 0;
      if (oddCounter === 3) {
        console.log("That's odd");
        oddCounter = 0;
      }
    }
    if (tacoMeat % 2 === 0) {
      evenCounter++;
      oddCounter = 0;
      if (evenCounter === 3) {
        console.log("Even more so!");
        evenCounter = 0;
      }
    }
  }
}
tacos(arr1); 


///Basic 13 Algos  

//1. Print 1-255
//Print1To255()
//Print all the integers from 1 to 255. 

function Print1To255(i) {
  for(var i = 1 ; i < 256; i++){
    console.log(i); 
  }
}
Print1To255(1); 

//2. Print Odds 1-255
//PrintOdds1To255()
//Print all odd integers from 1 to 255. 

function PrintOdds1To255(i) {
  for (var i = 1; i < 256; i+=2) {
    console.log(i);
  }
}
PrintOdds1To255(1); 


//3. Print Ints and Sum 0-255
//PrintIntsAndSum0To255()
//Print integers from 0 to 255, and with each integer
//print the sum so far. 

function PrintIntsAndSum0To255() { 
  var sum = 0;
  for (var i = 0; i < 256; i++) { 
    sum += i; 
    console.log(i , sum)
  }
}
PrintIntsAndSum0To255();


//4. Iterate and Print Array
//Iterate through a given array, printing each value.
//PrintArrayVals(arr) 

var arr1 = [2,15,20,100]
function PrintArrayVals(arr1) {
  for (var i = 0; i < arr1.length; i++) {
    
  }
  console.log(arr1)
}
PrintArrayVals(arr1); 


//5. Find and Print Max
//PrintMaxOfArray(arr)
//Given an array, find and print its largest element. 

var arr1 = [2,15,20,100] 
var max = arr1[0]
function PrintMaxOfArray(arr1) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
  }
  console.log(max);
}
PrintMaxOfArray(arr1);


//6. Get and Print Average
//PrintAverageOfArray(arr)
//Analyze an array’s values and print the average.

var arr1 = [2,15,20,100] 
var sum = 0
function PrintAverageOfArray(arr1) {
  for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i] 
  } 
  console.log(sum / arr1.length);
}
PrintAverageOfArray(arr1); 
