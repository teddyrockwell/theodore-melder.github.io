// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){ // function declaration, taking in the parameter of a value
return value; // return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value){
if(typeof value == "string"){ // if statement testing if the value is a string
        return "string"; // return a string of string if string
    } else if (value === null){ // // if statement testing if the value is null
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
    } 
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    let pp = []; // create an empty array
    if (Array.isArray(array) === false) { // if statement testing for if array is an array
        return pp; // return an empty array 
    } else if (typeof number !== "number") { // testing if the number given is actually a number
        return array[0]; // return the first index of the array
    } else if(number > array.length){ // edge case for if number is greater than array length
        return array; // return the original array 
    } else { // final edge case
        for (var i = 0; i < number; i++) { // for loop using number for iterations/counting
            pp.push(array[i]); // iterate through array (i) number of times and push those values to pp array
        }
    }
    return pp; // RETURN OF THE PP (array)
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    let pp = []; // create an empty array
    if (Array.isArray(array) === false) { // if statement testing for if array is an array
        return pp; // return an empty array 
    } else if (typeof number !== "number") { // testing if the number given is actually a number
        return array[array.length - 1]; // return the last index of the array
    } else if(number > array.length){ // edge case for if number is greater than array length
        return array; // return the original array 
    } else { // final edge case
        for (var i = 1; i <= number; i++) { // for loop using number for iterations/counting
            pp.push(array[i]); // iterate through array (i) number of times and push those values to pp array
        }
    }
    return pp; // RETURN OF THE PP (array)
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    if (Array.isArray(array) === false){ // check to see if the array is an array
        return -1; // if the array isn't an array, return -1
    }
    for (let i = 0; i < array.length; i++){ // for loop to go through array
        if(array[i] == value){ // if the iteration of the loop equals value
            return i; // return that iteration value/index
        }
    } return -1; // return -1 as a normal sort've edge case if the value isn't in the array 
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){ 
if (array.includes(value) === true){ // if the array including the value equals true
return true; // return true
}
return false; // return false as a normal sort've edge case if the array doesn't contain the value
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
if(Array.isArray(collection) === true){ // if the array is an array
    for(let i = 0; i < collection.length; i++){ // for loop to iteration through the array
        func(collection[i], i, collection); // while iterating through the array, call the function on the array element, the index, and the array itself
    }
} else if (Array.isArray(collection) === false){ // edge case for if the collection is an object 
    for (var key in collection){ // use a for in loop to through object 
        func(collection[key], key, collection); // while iterating through object, call the function on the element keys, the key itself, and the object?
    }
}
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){ // NEED HELP ON GETTING THIS FUNCTION TO WORK WITH => _.indexOf()

var pp = []; // create an empty array called pp (i think it's funny calling stuff pp and then being like "return pp" at the end)
for( let i = 0; i < array.length; i++){ // create a for loop to iterate through our array
    if(pp.indexOf(array[i]) === -1) {  // if statement that states if the index of the array item equals -1 (first occurance of something)
            pp.push(array[i]); // then we will push that iteration of the array, to our pp array
            } 
        }
    return pp; // RETURN OF THE PP (array)
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
if(func === undefined ){
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through collections array
        for(let i = 0; i < collection.length; i++){
            //determine if collection[i] is truthy
            if(!collection[i]){
                //return false;
                return false;
            }
        }
    } else { //else
        //iterate through object
        for(let key in collection){
            //determine if collection[key] is truthy
            if(!collection[key]){
                //return false;
                return false;
            }
        }
    }
} else{ //else
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through collections array
        for(let i = 0; i < collection.length; i++){
            //determine if invoking func on the params is false
            if(func(collection[i], i, collection) === false){
                //return false
                return false;
            }
        }
    } else{ //else its an object
        //iterate through object
        for(let key in collection){
            //determine if invoking func on the params is false
            if(func(collection[key], key, collection) === false)
            {   //return false;
                return false;
            }
        }
    }
}//return true
return true;
 }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// some compares if one or however many have, a little different from every.

// reduce is a function he will explain tomorrow.

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
