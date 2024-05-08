// assignment 13
let transportationMode: string  [] = ["car","bicycle","bus","aeroplane"];

for (let i = 0; i < transportationMode.length; i++) {
    console.log(`i would to own a ${transportationMode[i]}`);
    
}

transportationMode.forEach(Mode => {
    console.log(`i would like own ${Mode}`);
});