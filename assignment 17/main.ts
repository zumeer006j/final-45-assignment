let guestlist: string [] = ["ali", "ahmed","kashif ","sarfaraz","mommal"];
// print message
console.log("unfortuenaly! the new dinner table cant arrive so we can invite two person")

guestlist.unshift("hafeez","aashir");
// print message updated list
console.log("updated list of guest :",guestlist);
// remove guest from yhe list
while (guestlist.length >2) {
    let removedguest: string | undefined = guestlist. pop();
    if (removedguest ! == undefined){
        console.log(`sorry, ${removedguest}, we cant invite you` )
    }
    }

    guestlist.forEach(guest =>{
        console.log(`dear ${guest}, you both are invited dinner`);
        
    }) 
    
    guestlist.slice(0, guestlist.length)
    
    console.log("updated list of guest:" , guestlist);
    
    





