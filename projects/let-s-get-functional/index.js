// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); // (filter: function(){  })

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./theodore-melder.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// filter => use for any function asking you to access only customers who pass a test

// map => use if you need to return a new array of every value from the input array transformed

// reduce => iterates through an array to "accumulates"

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        // return true if customer is male
        if (customer.gender === "male"){
            return customer.gender === "male";
        }
    }); // assign males to result of what filter returns 
    return males.length;
};

var femaleCount = function(array){
    // implement reduce to get number of female customers 
    let females = _.reduce(array, function(acc, current){
    // acc represents what we're accumulating
    // how do we interact with the acc value and the current object to keep track of the
    // number of female customers
    // acc = 0 | current = {name: "Stephanie"}
    // if current customer is female, add 1 to acc
        if (current.gender === "female"){
            acc += 1;
        }
        return acc;
    }, 0);
    return females;
};

/*
// seed value should always match the data  type of what we want to return
invoke _.reduce()
    // seed or no seed? => result = 0

    // iterate through array 
        // 0
            // result = 0;
        // 1
            // result = 1;





*/

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
