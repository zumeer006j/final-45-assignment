//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician:string[] = ['crissAngles','DavidBlaine','Rickyjak','Dynamo'];
function show_magicians(magicians:string[]){
    magicians.forEach(Element => {
        console.log(Element);
        
    });
}
show_magicians(magician)