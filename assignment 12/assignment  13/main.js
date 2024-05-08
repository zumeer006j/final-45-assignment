// assignment 13
var transportationMode = ["car", "bicycle", "bus", "aeroplane"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("i would to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (Mode) {
    console.log("i would like own ".concat(Mode));
});
