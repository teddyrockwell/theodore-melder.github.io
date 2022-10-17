/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // create animal object 
animal.species = "Lizard"; // add species key with lizard value 
animal.name = "Dimitri"; // add name key with dimitri value
animal.noises = []; // add noises key with empty array value
// console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // create noises array
noises[0] = "Sss"; // first item in noises array is sss
noises.push("Ah"); // add ah to the end of noises array
noises.unshift("Hiss"); // add hiss to the front of the noises array
noises[noises.length] = "Ooga Booga"; // add ooga booga using noises.length as an index number
// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises; // assign animal noises key and assign value of noises array
animal.noises.push("Oingo Boingo!"); // add oingo boingo to end of animal noises array
// console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects? - Dot and Bracket Notation
 *
 * 2. What are the different ways of accessing elements on arrays? - Bracket Notation 
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // create animals array
animals.push(animal); // add animal to animals array
// console.log(animals);
var duck = { // create duck object
  species: 'duck',
   name: 'Jerome', 
   noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
// console.log(animals);
var bear = { // create bear object
  species: 'bear',
   name: 'Barry', 
   noises: ['rawr', 'ugh', 'rrrr', 'roar']
};
var snake = { // create snake object
  species: 'snake',
   name: 'Jake', 
   noises: ['Sss', 'Psst', 'Hiss']
};
animals.push(bear, snake); // add bear and snake objects to animals array 
// console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// I think an array would be good for keeping a list of friends because it can be ordered and primarily is just centered around people.

var getRandom  = function(array){
 return Math.floor((Math.random() * animals.length)); // animals array - function -> gives the index the array -> we want the object's name. ----- we have to find a way to add bracket or dot notation to the end of the math random function.
}

friends.push(animals[getRandom()].name);
// console.log(friends);

animals[getRandom()]['friends'] = friends;
// console.log(animals[getRandom()]['friends'] = friends);

// console.log(animals[1].name);






/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}