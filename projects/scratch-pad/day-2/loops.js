// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for(var i = 0; i < array.length; i++){ // for loop to loop through array
    console.log(array[i]); // per iteration of loop, print array value
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for(var i = array.length - 1; i >= 0; i--){ // for loop to loop through array backwards, using array.length-1 as counter
    console.log(array[i]); // per iteration of loop, print array values 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var newKeys = Object.keys(object);  // create new array variable that holds object keys
  return newKeys; // return array varaibale containing  object keys
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for(var key in object){ // use for in loop to loop through object
    console.log(key); // print keys to console 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var newValues = Object.values(object);  // create new array variable that holds object values
  return newValues; // return new array varaibale containing object values
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object){ // for in loop to loop through an object
    console.log(object[key]); // print to console using console log
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var arrayOfObject = Object.keys(object); // create an array of the object keys
  return arrayOfObject.length; // return array length to provide number for object length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  

  /* I know I was supposed to think of a way to loop through an object but it felt easier to me to kinda just convert to a array and do it. Please let me know if this cheating/insufficient. I always try to think of a way to show what I DO know instead of what I might not know.  */

  var values = Object.values(object); // create an array o object values
  values.reverse(); // reverse array order 
  for (var i = 0; i < values.length; i++){ // use a for loop to loop through the array
    console.log(values[i]); // print to console values from array, thus printing object values in reverse
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
