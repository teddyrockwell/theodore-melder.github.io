// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // a - FACTORY FUNCTION - contact list refers to array  - list refers to contacts
    var contact = {};
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;

    return contact;
} 


function makeContactList() { // b 
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){ // iterate through the contacts using a for loop 
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){ // if statement comparing fullName string to the string of the contact's object's firstName and lastName
                    return contacts[i]; // return the contact's object iteration
                } else { // edge case
                    return undefined; // return undefined
                }
            };
        },
        removeContact: function(contact){
            contacts.pop(contact); // remove contact from the contacts array
        },
        printAllContactNames: function (){
            var butts = []; // create an array to hold name values // THIS PROBLEM GAVE ME SOME TROUBLE BECAUSE I THOUGHT I HAD TO USE A NESTED FOR LOOP - TOOK ME A SEC TO REALIZE I COULD JOIN THE NAMES WITH THE JOIN METHOD AND A ("\n")
            for(var i = 0; i < contacts.length; i++){ // use a loop to iterate and/or print contact names
                butts.push(contacts[i].nameFirst + " " + contacts[i].nameLast); // push the full name values into an array
            };
            console.log(butts); // checked for good measure 
            var chicken = butts.join("\n"); // join the full names in the array together, with ("\n"), in order to start new lines between each value
            console.log(chicken); // checked for extra good measure
            return chicken; // return the full names!
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
