/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){ // creating function taking in animals and name arguments
    for (var i = 0; i < animals.length; i++){ // for loop to iterate through animals array
        if(animals[i].name === name) // if the animals iteration name is equivalent to the name argument 
        return animals[i]; // return that animals iteration
    } return null;  // else do nothing
}
    



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){ // creating function taking in animals, name, and replacement arguments
    for (let i = 0; i < animals.length; i++){ // for loop to iterate through animals array
        if (animals[i].name === name){ // if the animals iteration name is equivalent to the name argument
            animals[i] = replacement; // assign/replace that animals iteration to replacement value
        }
    };
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// If an animal with that name exists within the `animals` Array, remove it.

function remove(animals, name){ // creating function taking in animals and name arguments
    for (let i = 0; i < animals.length; i++){ // for loop to iterate through animals array
        if (animals[i].name === name){ // if the animals iteration name is equivalent to the name argument
            animals.splice(0, 1); // remove it from the animals array
        }
    };
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){ // creating function taking in animals and animal arguments
        if(animal.name.length > 0 && animal.species.length > 0 ){ // if animal name is greater than zero and the animal species length is greater than zero
            for (var i = 0; i < animals.length; i++){ // then create a for loop that iterates for the equivalent of animals lenth
                if(animals[i].name !== animal.name){ // if animals iteration name is not equal to the animal name
                    animals.push(animal); // add the animal name to the animals array
                } else { // edge case
                    return false; // return false 
                }
            } 
        }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
