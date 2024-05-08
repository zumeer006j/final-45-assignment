//Alien Colors #2: Choose a color for an alien as you did in Exercise 25
var aliencolor = "green";
//write an if-else chain.
//If the alien’s color is green, 
// print a statement that the player just earned 5 points for shooting the alien.
if (aliencolor === "green") {
    console.log("player just earn 5 points of shooting the alien");
}
else {
    console.log("player earned 10 points");
}
//If the alien’s color isn’t green,
//print a statement that the player just earned 10 points
aliencolor = "yellow";
if (aliencolor === "green") {
    console.log("player earned 5 pooints");
}
else {
    console.log("player earned 10 points");
}
