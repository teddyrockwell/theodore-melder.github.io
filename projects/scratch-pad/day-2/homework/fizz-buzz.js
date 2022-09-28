// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for(var i = 1; i <= 100; i++){ // use for loop to have counter print to console
        let string = ""; // create a variable to hold string values added
        if(i % 3 == 0){ // if conditional statement for multiples of three to print Fizz
          string += "Fizz"; // add Fizz to string 
        }
        if (i % 5 == 0){ // if conditional statement for multiples of three to print Buzz
          string += "Buzz"; // add Buzz to string 
        }
        console.log(string || i); // print to console string OR current iteration of counter
      }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}