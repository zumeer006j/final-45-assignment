var guestlist = ["ali", "ahmed", "kashif ", "sarfaraz", "mommal"];
// print message
console.log("unfortuenaly! the new dinner table cant arrive so we can invite two person");
guestlist.unshift("hafeez", "aashir");
// print message updated list
console.log("updated list of guest :", guestlist);
// remove guest from yhe list
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    if (removedguest == undefined) {
        console.log("sorry, ".concat(removedguest, ", we cant invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you both are invited dinner"));
});
guestlist.slice(0, guestlist.length);
console.log("updated list of guest:", guestlist);
