/*How do we know we need a loop here? 
    because we are doing a repetitive task (giving out candy) at certain intervals
What's the starting point of the loop?
    2 (2 miles)
When should the loop stop?
    6 (6 miles)
How will it know to stop?
    we will set the middle condition to be x <= 6
What's the incrementing for each iteration of the loop?
    x + = 2
What variables do we need?
    miles? 
*/

var candyCount = 0
for (var m = 2; m <= 6  ; m+=2) {
    candyCount+=1
    console.log("candyCount;" + candyCount, "mile;"+ m)
}
//I put m in the console log so i can see it is skipping lines 
//correctly 


// Examples 


//For Loop 
for (var i = 2020; i > 1; i-=4){ 
    console.log(i);
} 

//While Loop 
var number = 2020 
while (number > 1) { 
    console.log(number); 
    number -=4; 
}