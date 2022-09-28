
let names = [ 'Alex', 'Roger', 'Mike', 'Anne' ];

//console.log( names [0] );  // you start at 0 for position x[0] start at 1 for length/quantity/count
//console.log( names [3] );

//names[3] = 'Martha'  
//can change values based on position 


//console.log(names.length);
// you start at 0 for Index x[0] and 
// start at 1 for length/quantity/count


for ( let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//loop for array to go through length or count of all values in the string


//how to add / remove elements from array. 
//push = add at the END of list/array. pop = remove from END of list/array
names.push( 'Eric' );
names.push( 'David');
console.log(names);
names.pop();   //since these remove from the end anyway, don't need to specify name to remove
console.log(names);

//How to add to beginning of array
names.unshift('Austin'); 
console.log(names); 

//How to remove from beginning 
names.shift('Austin'); 
console.log(names); 

//Add at any index inside of the array 
names.splice( num1, num2, num3 ); 
//example 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1 (does not replace so there is a 0)
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


/*var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {   
    console.log(i);   // prints the index       
    console.log(arr[i]);  // prints the array value at that index
} 
*/

