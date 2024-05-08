//placetovisit the world name but nmae of country cant use alphabat
var placetovisit = ["Pakistan", "India", "United states of American", "Afghanistan"];
// print original order
console.log("original order:", placetovisit);
// print array in alphabetical order without modifying the actual list.
console.log("/n Alphabetical order:", placetovisit.slice().sort());
// array is still in its original order by printing it.
console.log("original order:", placetovisit);
//array reverse aplphabetical order without changing the order
console.log("reverse order:", placetovisit.slice().sort().reverse());
// array is still in its original order by printing it again.
console.log("original order:", placetovisit);
//reverse the order of yourlist. print the array to show that its order has chanded
console.log("reverse order changed");
placetovisit.reverse();
console.log(placetovisit);
// reverse the order of yourlist .print the list to shown its original order
console.log("original order:", placetovisit.sort());
console.log(placetovisit);
// sort your array so it stored in alphabetical order.
console.log("reverse alphabetical order:", placetovisit.sort().reverse());
console.log(placetovisit);
