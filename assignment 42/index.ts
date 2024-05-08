//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician:string[] = ['crissAngles','DavidBlaine','Rickyjak','Dynamo'];

function make_great(magicianarray:string[]){
    for(let i=0; i<magicianarray.length; i++){
        magician[i] = 'the great'  +  magicianarray[i]
    }
        
}

function show_magicians(magicians:string[]){
    magicians.forEach(Element => {
        console.log(Element);
        
    });
}
make_great(magician)
show_magicians(magician)
