
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  var swag = ""; // variable that's empty but will have something added to it
  for (var i = 0; i < number; i++){ // for loop counter that will vary output based on argument number used
    swag += "#"; // add a # to the variable for every iteration
    console.log(swag); // log to console for every iteration that adds a #
  } return swag; // return what comes out

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(var i = 1; i <= 15; i++){ // use for loop to have counter print to console
    let string = ""; // create a variable to hold string values added
    if(i % 3 == 0){ // if conditional statement for multiples of three to print Fizz
      string += "fizz"; // add Fizz to string 
    }
    if (i % 5 == 0){ // if conditional statement for multiples of three to print Buzz
      string += "buzz"; // add Buzz to string 
    }
    console.log(string || i); // print to console string OR current iteration of counter
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var pickle = ""; // empty string to hold stuff
  var size = num; // use size to determine number of characters/lines
  for(var i = 0; i < size; i++){ // for loop for lines - "\n"
    for (var x = 0; x < size; x++){ // nested for loop to determine what each line will look like
      if((x + i) % 2 === 0){ // if the sum of x and i is divisble by 2, add to the empty string 
        pickle += " "; // space for odd numbers
      } else { // edge case
        pickle += "#"; // hash for even numbers
      }
  } pickle += "\n"; // add new line for each iteration
  
    }
  console.log(pickle); // log string to console
  return pickle; // return string
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
