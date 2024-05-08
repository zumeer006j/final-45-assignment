// assignment 14
let guestlist:String[] = ["ahram","kashif","sarfaraz","shahmeer"]

// invite each guest for dinner


guestlist.forEach(guest => {
    console.log(`dear ${guest}, you are invited to dinner`);
});

//map()
// invite guest
let invitation :string[] = guestlist.map(guest => `dear ${guest}, you are invited to dinner`)

invitation.forEach(invitation=> {
    console.log(invitation);
});