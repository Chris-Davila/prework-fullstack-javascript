/*
 * Conditionals, Functions, Scope and Loops.
 */
//---- Conditionals
// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or Equals
let greaterThanEq = 5 >= 5;

// Less than or Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

console.log(equals);
console.log(greaterThan);
console.log(lessThan);

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

//---- Functions
function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.");
    } else if (storeB < storeA){
        console.log("Store B has a lower price.");
    } else {
        console.log("Their prices are equal.");
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum(num) {
    return num * num;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

//---- Scope
let x = 10;
function addNumbers(n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1, 2, 15);
console.log(x);

//---- Arrays and Loops
let ourArray = [1, 2, 3, 4, 5];
for (let i = 0; i < ourArray.length; i++) {
    console.log(ourArray[i]);
}

let y = 0;
while (y < 10) {
    console.log("Ran");
    y += 1
}