//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magician:string[] = ['crissAngles','DavidBlaine','Rickyjak','Dynamo'];

function copyarray(array:string[]) {
    return[...array]
}

function make_great(magicianarray:string[]){
    for(let i=0; i<magicianarray.length; i++){
        magicianarray[i] = 'the great'  +  magicianarray[i]
    }
        
}

function show_magicians(magicians:string[]){
    magicians.forEach(Element => {
        console.log(Element);
        
    });
}
const copymagicianarray = copyarray(magician)

make_great(copymagicianarray);
console.log('\n\nthis is my original array:');

show_magicians(magician);
console.log('\n\nthis is my modified array:');

show_magicians(copymagicianarray);




