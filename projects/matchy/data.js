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
var animal = {};
animal.species = "Lizard";
animal.name = "Dimitri: The Nightclub Samurai";
animal.noises = [];
// console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Sss";
noises.push("Ah");
noises.unshift("Hiss");
noises[noises.length] = "Ooga Booga";
// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("Oingo Boingo!");
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
var animals = [];
animals.push(animal);
// console.log(animals);
var duck = {
  species: 'duck',
   name: 'Jerome', 
   noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
// console.log(animals);
var bear = {
  species: 'bear',
   name: 'Barry', 
   noises: ['rawr', 'ugh', 'rrrr', 'roar']
};
var snake = {
  species: 'snake',
   name: 'Jake', 
   noises: ['Sss', 'Psst', 'Hiss']
};
animals.push(bear, snake);
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
console.log(friends);

animals[getRandom()]['friends'] = friends;
console.log(animals[getRandom()]['friends'] = friends);


// Using **bracket notation**, add the `friends` list as a **property** also named `friends` ---- on one of the animals in the `animals` array







// console.log(getRandom()['name']);

// friends.push(getRandom()); // or friends.push(getRandom)['name']
// // 
// console.log(friends);

// animals[3].friends.push(friends);
// console.log(animals[3].friends.push(friends));

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