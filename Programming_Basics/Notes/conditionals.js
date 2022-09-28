/* 
Relational Operators 
<  >  <=  >=  === (equal to)  !==( not equal to)  || (or)  && (and) ! (is not)

! changes an expression from true to false or false to true

*/

!19>=21; //can change logic with this ! function 

let age = 19;
let graduated = false;

if (age >= 21 && graduated === true) {
    console.log("You are allowed to drink");
}
else {
    console.log("You are NOT allowed to drink");
}

