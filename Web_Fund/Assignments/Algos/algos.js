//week 1 day 3
// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) {
//         countPositives += 1
//     }
// }
// console.log("there are " + countPositives + " positive values");


// week 1 day 5 
// Write a function reverse( arr ) to reverse an array, if we were given...

// ["a", "b", "c", "d", "e"];
// we expect to get back...

// ["e", "d", "c", "b", "a"];

// var arr = ["a", "b", "c", "d", "e"];
// function reverse(arr) {
//     var arr2 = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         arr2.push(arr.pop())
//     }
//     return arr2
// }
// console.log(reverse(["a", "b", "c", "d", "e"]));


// Fizzbuzz
// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// Week 2 day 1 
// Magic 8 Ball

// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];

// function getAnswers(arr) {
//     var index = Math.floor(Math.random() * arr.length)
//     console.log(arr[index])
// }

// getAnswers(lifesAnswers);


// Week 2 day 2 

// var pokémon = [
//     { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
//     { "id": 5, "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9, "name": "Blastoise", "types": ["water"] },
//     { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
//     { "id": 23, "name": "Ekans", "types": ["poison"] },
//     { "id": 24, "name": "Arbok", "types": ["poison"] },
//     { "id": 25, "name": "Pikachu", "types": ["electric"] },
//     { "id": 37, "name": "Vulpix", "types": ["fire"] },
//     { "id": 52, "name": "Meowth", "types": ["normal"] },
//     { "id": 63, "name": "Abra", "types": ["psychic"] },
//     { "id": 67, "name": "Machamp", "types": ["fighting"] },
//     { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
//     { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
//     { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
//     { "id": 98, "name": "Krabby", "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
//     { "id": 133, "name": "Eevee", "types": ["normal"] },
//     { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair", "types": ["dragon"] }
// ];


// console.log the first type of all the pokémon whose second type is "flying"
// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types[1] == "flying") {
//         console.log(pokémon[i].types[0]);
//     }
// }

// console.log the names of the pokémon whose only type is "poison"
// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types[0] == "poison" && pokémon[i].types.length == 1) {
//         console.log(pokémon[i]);
//     }
// }

// console.log the pokémon objects whose id is evenly divisible by 3
// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id % 3 === 0) {
//         console.log(pokémon[i]);
//     }
// }

//  console.log the pokémon objects that have more than one type
// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].types.length > 1) {
//         console.log(pokémon[i]);
//     }
// }
