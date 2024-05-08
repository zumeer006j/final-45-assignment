//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['crissAngles', 'DavidBlaine', 'Rickyjak', 'Dynamo'];
function copyarray(array) {
    return __spreadArray([], array, true);
}
function make_great(magicianarray) {
    for (var i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = 'the great' + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
var copymagicianarray = copyarray(magician);
make_great(copymagicianarray);
console.log('\n\nthis is my original array:');
show_magicians(magician);
console.log('\n\nthis is my modified array:');
show_magicians(copymagicianarray);
