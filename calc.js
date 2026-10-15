const add = require("./addition");
const subtract = require("./subtraction");
const multiply = require("./multiplication");
const divide = require("./division");

console.log("Select operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

let choice = 2;

let num1 = 10;
let num2 = 5;

if (choice === 1) {
    console.log(num1 + " + " + num2 + " = " + add(num1, num2));
}
else if (choice === 2) {
    console.log(num1 + " - " + num2 + " = " + subtract(num1, num2));
}
else if (choice === 3) {
    console.log(num1 + " * " + num2 + " = " + multiply(num1, num2));
}
else if (choice === 4) {
    console.log(num1 + " / " + num2 + " = " + divide(num1, num2));
}
else {
    console.log("Invalid choice");
}