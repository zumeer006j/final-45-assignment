"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//assignment 16
let guestlist = ["shahmeer", "kashif", "syed zumeer"];
console.log("great news ! we found a bigger table");
// unshift
guestlist.unshift("habib");
// splice
guestlist.splice(Math.floor(guestlist.length / 2), 0, "noman");
//push()
guestlist.push("cheetah");
console.log(guestlist);
guestlist.forEach(guest => {
    console.log(`dear ${guest}, you all are invited to dinner`);
});
// assignment 17
// print message
console.log("unfortuenaly! the new dinner table cant arrived so we can invite two person");
guestlist.unshift("hafeez", "aashir");
// print message updated
console.log("updated list of guest :", guestlist);
// romve guest from the list
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    if (removeguest == undefined) {
        console.log(`sorry, ${removeguest}, we can not invite you`);
    }
}
