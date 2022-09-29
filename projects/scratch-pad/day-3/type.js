// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value) === true){ // if statement that tests whether a value is an array, if true, then next lines will execute
        return true; // return true if an array
    } else { // edge case 
        return false; // return false if not an array
    };
    
    
    
    // YOUR CODE ABOVE HERE //
};

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    /*
    to check date - see if value is an instance of a date and if that's true or false

    to check array -  use Array.isArray(value) method
    
    to check if object -  use typeof operator

    to check if null - use logic operator 
    */
    
    if((value instanceof Date) === false && Array.isArray(value) === false && typeof value === "object" && value !== null){ // run various tests together to deteremine if object, then execute next lines
        return true; // if true, return true
    } else { // edge case
        return false; // return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    /*
    Same as previous problem, however, we only want to test if the typeof equals object, if isn't a null, and that it isn't a date
    
    */
    
    if(typeof value === "object" && value !== null && (value instanceof Date) === false){ // run various tests together to deteremine if object, then execute next lines
        return true; // if true, return true
    } else { // edge case
        return false; // return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" 
 *    - "array" 
 *    - "object" 
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //


    if(typeof value == "string"){ // if statement testing if the value is a string
        return "string"; // return a string of string if string
    } else if (value == null){ // // if statement testing if the value is null
        return "null"; // return a string of null if null
    } else if (Array.isArray(value) === true){ // if statement testing if the value is an array
        return "array"; // return a string of array if array
    } else if((value instanceof Date) === false && Array.isArray(value) === false && typeof value === "object" && value !== null){ // if statement testing if value is an object
        return "object"; // return a string of object if object
    } else if (typeof value == "boolean"){ // if statement testing if value is boolean
        return "boolean"; // return a string of boolean if boolean
    } else if (typeof value == "function"){ // if statement testing if value is function
        return "function"; // return a string of function if function
    } else if (typeof value == "undefined"){ // if statement testing if value is undefined 
        return "undefined"; // return a string of undefined if undefined
    } else if (typeof value == "number"){ // if statement testing if value is number
        return "number"; // return a string of number if number
    } else if ((value instanceof Date) === true){ // if statement testing if value is date
        return "date"; // return a string of date if date
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
