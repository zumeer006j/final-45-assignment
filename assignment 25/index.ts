//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color :string = 'green';

//Write an if statement to test whether the alien’s color is green. 
if(alien_color === 'green'){
    console.log("player just earned 5 points");
    
}

//Write one version of this program that passes the if test and another that fails.
alien_color = 'red';
// (The version that fails will have no output.)
if (alien_color === 'green'){
    console.log("player just earned 5 points");
    

}