/*
 * Variables, Data Types, and Typing
 */

//---- Variables
let wordData = "Word Data";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

console.log(totalWithTax);

//---- Data Types
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value"
    }
};

console.log(obj.key1);
console.log(obj.obj2.obj2Key1);

//---- Typing
let var1 = "2";
let var2 = 5;
let result = var1 + var2;
console.log(result);

//---- Operators
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let div = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);
console.log(mod + div);
console.log(mult / mod);
console.log(add - sub);