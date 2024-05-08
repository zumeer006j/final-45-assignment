"use strict";
// assignment 15
let guestlist = ["shahmeer", "ramiq", "kashif"];
// print the name who cann't make dinner
let unableAttend = guestlist.splice(1, 1)[0];
console.log(`${unableAttend} cann't make dinner`);
// push
guestlist.push("syed zumeer");
console.log(guestlist);
// print a message
guestlist.forEach(guest => {
    console.log(`dear${guest} you are hardly invited`);
});
//pop
