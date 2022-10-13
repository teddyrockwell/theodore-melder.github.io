// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return length of string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // return string forced to lowercase
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // return string forced to uppercase
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

      var pieceOne = string.toLowerCase(); // turn string to lowercase with .toLowerCase() method => all lowercase string
      var pieceTwo = pieceOne.split(" "); // split string with string.split method => all lowercase string has now been made array items
      var pieceThree = pieceTwo.join("-"); // join array items into a string with .join() method => array items are joined together with a dash (-)
      return pieceThree; // return string of array items joined together with dashes

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //check if index zero of array begins with char
    if(string[0] == char.toUpperCase() || string[0] == char.toLowerCase()){ // make char either upper or lower case
        return true; // return true value if true
      } else { // edge case
        return false; // return false value if false
      } 
        

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) { // same logic as beginsWith but we use string.length -1 to get the end of the string.
    // YOUR CODE BELOW HERE //

    //check if index zero of array ends with char
    if(string[string.length - 1] == char.toUpperCase() || string[string.length - 1] == char.toLowerCase()){ // must consider how to find the ending string index of string now, still make char either upper or lower case
        return true; // return true value if true
      } else {
        return false; // return false value if false
      } 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //return the strings concatenated with each other
    return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments); // create array from Array.from(arguments)

    var sentence = args.join(""); // use join method to create a string from array elements
  
    return sentence; // returns joined sentence string

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //must compare length property of different strings
if(stringOne.length > stringTwo.length){ // if statement comparing stringOne length and stringTwo length
    return stringOne; //return stringOne since it's longer
} else if (stringOne.length < stringTwo.length){ // edge case to evalute lengths again
    return stringTwo; // return stringTwo since it's longer
} else if (stringOne.length = stringTwo.length){ // evalute a possible edge case
    return stringOne && stringTwo; // return both to show they're the same length? or could've prob said they're the same length
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    var a = stringOne; // create a variable for the first argument
    var b = stringTwo; // create a variable for the second argument
    if (a < b){ // compare them
    return 1; // return 1 if the first variable comes before the the second variable
  } else if (a > b){ // compare again
    return -1; // return -1 if the first variable comes after the second variable
  } else if (a = b){ // compare again
    return 0; // return 0 if the index of the first variable is the same as the index second variable
  }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) { // flip the logic from sortAscending function
    // YOUR CODE BELOW HERE //

    var a = stringOne; // create a variable for the first argument
    var b = stringTwo; // create a variable for the second argument
    if (a < b){ // compare them
    return -1; // return 1 if the first variable comes before the the second variable
  } else if (a > b){ // compare again
    return 1; // return -1 if the first variable comes after the second variable
  } else if (a = b){ // compare again
    return 0; // return 0 if the index of the first variable is the same as the index second variable
  }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
