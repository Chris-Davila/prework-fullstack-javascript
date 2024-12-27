/*
 * Objects, Interfaces, and APIs
 */
//---- Objects & Interfaces
let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "small",
    // bark is considered an interface
    bark: function(typeOfBark) {
        console.log("Woof!");
    },
}

dog.bark();

//---- Pass by value vs pass by reference
function x1(y) {
    y += 5;
    console.log(y);
}

function x2(z) {
    z.num += 5;
    console.log(z);
}

let y = 5;
x1(y);
console.log(y);

let z = {
    name: "Tom",
    num: 10,
}
x2(z);
console.log(z);