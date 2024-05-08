//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following

//• Tests for equality with string
console.log("equality test with string : " , "orange" === "orange");
// .Tests for inequality with string
console.log("inequality test with string : " , ("orange" as string) !== "apple");

// Tests using the lower case function
console.log("lower case function test : " , "Zumeer".toLowerCase() === "zumeer");

//Numerical tests involving equality
console.log("equality test with number : " , "34" === "34");
//Numerical tests involving inequality
console.log("equality test with string : " , (34 as number) !== 35);
//Numerical tests involving  greater than 
console.log("greater than test :" , 10 > 5);
//Numerical tests involving less than 
console.log("greater than test :" , 5 < 10 );
//Numerical tests involving greater than or equal to
console.log("greater than or equal to test :" , 10 >= 10);
//Numerical tests involving less than or equal to
console.log("less than or equal to test :" , 5 <= 10);

//Tests using "and" operators
console.log("And operator test :" , 4 === 4 && 10 > 5);
//Tests using  "or" operators
console.log("or operator test : " , 4===4 || false);

//Test whether an item is in a array
let fruits :string[] = ["banana","apple","orange"];
console.log("test apple in the array :" , fruits.includes("apple"));
//Test whether an item is not in a array
console.log("test apple is not in array: ", !fruits.includes("apple"))

































