/*get comfy with Loops, will be doing them your whole career

Usually set control variable to 0 or 1

while(developer) {
    let doLoops = true;
}  

for (control variable, identify condition(s),  update control variable) {
    code
}
*/

// FOR LOOP 
// wannt to print "hello" 10 times 
for (let counter =1; counter <= 10; counter++ ) {
    console.log( "hello" , counter);
}

//important to be careful with condition. Set parameters correctly (middle section)

/* 
OPERATORS
PEMDAS for order of operators. = is always last
() - do this first (priority operator)
* - multiply 
/ - divide 
% - remainder of a division 
+ - add 
- - subtract 
++ - adds one unit 
-- - subtract one unit 
+= - adds an amount on the right of the = 
-= = subtracts an amount on the right of the = 


REMAINDER OPERATOR % 
remainder of a division 

10%3 = 1 
3 fits 3 times into the 10 so the remainder of that is 1 

5%2 = 1 
2 fits into 5 2 times, and 1 remaining 

10%4 = 2 

10%6 = 4

10%15 = 10
If the number doesn't fit, then the answer is the original number 
15 does not fit in 10 so it is a 0 
10 - 0 = 10 

if (10 % 2 === 0) ==> even 
if (10 % 2 === 1) ==> odd
*/ 

/* 
//WHILE LOOPS 
*/

let counter =1; 
    while (counter <= 10) {
        console.log( "hello", counter); 
        counter ++;
    }
