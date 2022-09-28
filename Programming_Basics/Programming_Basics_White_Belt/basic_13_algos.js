// 1. Print 1-255
//Print1To255()
//Print all the integers from 1 to 255. 

function Print1To255(i) {
    for(var i = 1 ; i < 256; i++){
    console.log(i); 
    }
}
    Print1To255(1);  


// 2. Print Odds 1-255
//PrintOdds1To255()
//Print all odd integers from 1 to 255. 

function PrintOdds1To255(i) {
    for (var i = 1; i < 256; i+=2) {
        console.log(i);
    }
}
    PrintOdds1To255(1); 


// 3. Print Ints and Sum 0-255
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


// 4. Iterate and Print Array
//Iterate through a given array, printing each value.
//PrintArrayVals(arr) 

var arr1 = [2,15,20,100]
function PrintArrayVals(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
    }
    
}
PrintArrayVals(arr1); 


// 5. Find and Print Max
//PrintMaxOfArray(arr)
//Given an array, find and print its largest element. 

var arr1 = [2,15,20,100] 
function PrintMaxOfArray(arr1) {
    var max = arr1[0]
    for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
    console.log(max);
    }
    
}
PrintMaxOfArray(arr1); 


// 6. Get and Print Average
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


// 7. Array with Odds
//ReturnOddsArray1To255()
//Create an array with all the odd integers between 1
//and 255 (inclusive). 

arr1 = []
function ReturnOddsArray1To255() {
    for (var i = 1; i < 256; i+=2) {
    arr1.push(i)
    }
    console.log(arr1);
}
ReturnOddsArray1To255();


// 8. Square the Values
//SquareArrayVals(arr)
//Square each value in a given array, returning that
//same array with changed values. 

var arr1 = [2,15,20,100] 
function SquareArrayVals(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        arr1[0] = Math.sqrt(2)
        arr1[1] = Math.sqrt(15)
        arr1[2] = Math.sqrt(20) 
        arr1[3] = Math.sqrt(100)
    }
    console.log(arr1)
}
SquareArrayVals(arr1); 

//tried to do arr[i] = Math.sqrt(arr[i]) but did not work

var arr1 = [2,15,20,100] 
function SquareArrayVals(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = Math.sqrt(arr1[i])
    }
    console.log(arr1)
}
SquareArrayVals(arr1); 
//figured it out post test. literally forgot the 1 of arr1 -_- 


// 10. Zero Out Negative Numbers
//ZeroOutArrayNegativeVals(arr)
//Return the given array, after setting any negative
//values to zero.

var arr1 = [-2,15,-20,100]  
function ZeroOutArrayNegativeVals() {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            console.log(arr1[i])
        }
        else { arr1[i] = 0
        }
}
    console.log(arr1);
}
ZeroOutArrayNegativeVals(arr1);


// 13. Swap String For Array Negative Values
//SwapStringForArrayNegativeVals(arr)
//Given an array of numbers, replace any negative
//values with the string 'Dojo'. 

var arr1 = [-2,15,-20,100]  
function SwapStringForArrayNegativeVals() {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0 ) {
            arr1[i] = 'Dojo'
        }       
    }
    console.log(arr1);
}
SwapStringForArrayNegativeVals();

