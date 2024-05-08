// question 12
var names = ["zumeer", "ramiq", "daynal", "hamza", "tanveer"];
for (var i = 0; i < names.length; i++) {
    console.log("hellow, ".concat(names[i], "! how are you today?"));
}
// for each
names.forEach(function (friends) {
    console.log("hi, ".concat(friends, "! how are you today?"));
});
