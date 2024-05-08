//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien
var Aliencolor = "green";
//If the alien is green, print a message that the player earned 5 points
// If the alien is yellow, print a message that the player earned 10 points
//If the alien is red, print a message that the player earned 15 points.
// version 1 of the program
if (Aliencolor === "green") {
    console.log("you earned 5 points");
}
else if (Aliencolor === "yellow") {
    console.log("you earned 10 points");
}
else if (Aliencolor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("select right answer");
}
// version 2 of the program
Aliencolor = "yellow";
if (Aliencolor === "green") {
    console.log("you earned 5 points");
}
else if (Aliencolor === "yellow") {
    console.log("you earned 10 points");
}
else if (Aliencolor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("select right answer");
}
// version 3 of the program
Aliencolor = "red";
if (Aliencolor === "green") {
    console.log("you earned 5 points");
}
else if (Aliencolor === "yellow") {
    console.log("you earned 10 points");
}
else if (Aliencolor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("select right answer");
}
