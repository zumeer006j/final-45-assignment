//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ['crissAngles', 'DavidBlaine', 'Rickyjak', 'Dynamo'];
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
show_magicians(magician);
