//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var newArray = Object.values(object); // use the object values method to get an array of object values
return newArray; // return the array of object values
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var newArray = Object.keys(object); // array of object keys
var newerArray = newArray.join(" "); // join the keys at their spaces
return newerArray; // return that array, dawg
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // Should take an object and return all its string values in a string each separated with a space
  var tempArray = [];
  var secondArray = [];
  tempArray  = Object.values(object); /// here, our array has 3 strings and an object in it
  console.log(tempArray);
  for (var i = 0; i < tempArray.length; i++){ // loop to push items to another array
    if(typeof tempArray[i] === "string"){ // if statement set up to only push string index values
       secondArray.push(tempArray[i]); // push that good stuff to the new array
    }

  }
  console.log(secondArray);
  var chingy = secondArray.join(" "); // string that joins the new array values
  console.log(chingy);
  return chingy; // return that string, dawg

    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){ // if statement testing if the value is an array
        return "array"; // return array
}   else if ((collection instanceof Date) === false && Array.isArray(collection) === false && typeof collection === "object" && collection !== null){ // if statement testing if value is an object
    return "object"; // return object 
}
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
return string.charAt(0).toUpperCase() + string.slice(1); // capitalize the character at the first index and thing add string, starting from the first index
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var a = []; // create empty array
  var b = []; // create another empty array
  a = string.split(" "); // split the string up into an array
  console.log(a); // log just to check 
  for(var i = 0; i < a.length; i ++){ // iterate through the array
  a[i] = a[i][0].toUpperCase() + a[i].substr(1); //  capitalize the first letter of every word and add the rest of the string
  }
  b = a.join(" "); //make b equal to array indexs joined
  console.log(b); // check b
  return b; // return b

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  var a = []; // create empty array
  var b = []; // create another empty array
var greet = "Welcome" + " " + object.name + "!"; // concatenate welcome with object name and exclamation point
a = greet.split(" "); // split the string up into an array
     for(var i = 0; i < a.length; i ++){ // iterate through the array
  a[i] = a[i][0].toUpperCase() + a[i].substr(1); // capitalize the first letter of every word and add rest of string 
  }
  b = a.join(" "); // have b join everything together into a string 
  console.log(b); // check b 
  return b; // return b 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  var a = []; // create empty array
var profile = object.name + " is a " + object.species; // concatenate object name and object species string
  a = profile.split(" "); // split the string up into an array 
  for(var i = 0; i < a.length; i ++){ // iterate through the array
  a[i] = a[i][0].toUpperCase() + a[i].substr(1); // capitalize every word
  }
  return a[0] + " is a " + a[a.length - 1]; // return a contatenatation using the array indexes and a "is a" string

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  var jif = []; // make an empty array 
if(object.hasOwnProperty("noises") && object.noises.length > 0){ // if has a noises property in the object and the length of the noises propety is greater than zero
  jif = object.noises.join(" "); // join the noises values together into a string
} else { // edge case 
  return "there are no noises"; // return that there are no noises
}
  console.log(jif); // log to check
  return jif; // return the string
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  var correct = []; // create an empty array
var check = string.split(" "); // set the string equal to an array
  for(var i = 0; i < check.length; i++){ // iterate or loop through array
    if(check[i] == word){ // check if the word is equal to what we're looking for
      correct.push(check[i]); // if that is that word we're looking for, push it to a new array
    } 
  } if(correct.length > 0){ // if the new array has a length greater than zero
    return true; // return true
  } else { // edge case
    return false; // return false
  }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  object.friends.push(name); // push name into object.friends
  return object; // return the object 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  var homies = []; // create an empty array
  if(object.hasOwnProperty("friends") === false){ // if statement to check if the friends object exists
    return false; // return false if it doesn't exist
  }
  if(object.hasOwnProperty("friends") && object.friends.length > 0){ // check to see if the friends object exists and if the length is greater than 0
    for (var i = 0; i < object.friends.length; i++){ // set up for loop to iterate and check through object if passing previous condition
      if(object.friends[i] == name){ // if the iteration of the object matches the name 
        homies.push(object.friends[i]); // push that iteration of the object to the homies array
      }
    }
    if(homies[0] == name){ // if homies equals name
      return true; // return true; 
    } else { // edge case
      return false; // return false
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { 
  var notMe = []; // create an empty array to use
for (let i = 0; i < array.length; i++){ // use a for loop to iterate through array
  if (array[i].name !== name && array[i].friends.indexOf(name)){ // if the iteration of the array's name does not match the name value and if the iterations of friends don't match
    notMe.push(array[i].name); // push name values to array
  }
} 
  console.log(notMe); // console log to check
  return notMe; // return array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value; // update the object key equal to the value
return object; // return the object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++){ // for loop to iterate through array of strings
  delete object[array[i]]; // delete the object values that come from being iterated out of the array
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var pp = [...new Set(array)]; // use Set to get rid of duplicates 
return pp; // return PP array
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}