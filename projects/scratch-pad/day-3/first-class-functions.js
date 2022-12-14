// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){ // return a function that tests value
        return (value > base); // compares value and base, resolving to a bool value
    }

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){ // return a function that tests value
        return (value < base); // compares value and base, resolving to a bool value
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) { // "a"
    // YOUR CODE BELOW HERE //
    
    return function(string){ // fuction that tests string 
        return (string[0] === startsWith.toLowerCase() || string[0] === startsWith.toUpperCase()); // function tests the first index of the string and sees whether is a lowercase or uppercase startsWith
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){ // fuction that tests string 
        return (string[string.length - 1] === endsWith.toLowerCase() || string[string.length -1] === endsWith.toUpperCase()); // function tests the last index of the string and sees whether is a lowercase or uppercase endsWith
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) { // strings is ["a", "b", "c"]; modify capitalizes 
    // YOUR CODE BELOW HERE //

    var mod = []; // create a collection to push to 
    for(var i = 0; i < strings.length; i++){ // loop counter using string length
        mod.push(modify(strings[i])); // push the modified string iterations to a new array
    } return mod; // return the new array

/* THIS PROBLEM CAUSED ME SO MUCH ISSUE. I LITERALLY FORGOT TO RETURN THE NEW ARRAY OUTSIDE OF THE FUNCTION BLOCK. WOW.*/


    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    var mod = []; // create a collection to push to 
    for(var i = 0; i < strings.length; i++){ // loop counter using string length
        test(strings[i]); // while looping, test each iteration of strings
        if(test(strings[0]) == true && test(strings[1]) == true && test(strings[2]) == true){ // if all three tests of strings are true
            return true; // return true if all true
        } else{ // edge case
            return false; //  return false
        }
    } 
    

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
