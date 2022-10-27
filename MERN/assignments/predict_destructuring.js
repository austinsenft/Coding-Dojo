// Problem 1 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Tesla, Mercedes or Honda?
console.log(randomCar)
console.log(otherRandomCar)
//It was Tesla Mercedes as output. I see that the commas give us a hint at positioning in the array 

// Problem 2 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Elon
console.log(name);
console.log(otherName);
//  Error: ReferenceError: name is not defined

// Problem 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//12345 , person name age and height 
console.log(password);
console.log(hashedPassword);
// 12345 and undefined  

// Problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//2, 5, 2 
// False, True
console.log(first == second);
console.log(first == third);
// false, true (woot guessed one correct! outside of capitalizing my booleans)

// Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
// [1, 5, 1, 8, 3, 3]
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// value, [ 1, 5, 1, 8, 3, 3 ], 1,  5

