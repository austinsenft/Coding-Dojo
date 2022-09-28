
function greet(person,time) {
    if (person == 'Anakin' && time < 12) {
        console.log('Good morning, Anakin. How is your morning?')
    } 
    else if (person == 'Anakin' && time > 12 ) {
        console.log('Good afternoon, Anakin. How is your afternoon?')
    } 
    else if (person == 'Count Dooku' && time > 0 ) {
        console.log("I'm coming for you, Dooku!")
    } 
}



greet('Anakin', 11);
greet('Anakin', 13);
greet('Count Dooku', 1)