const add = require("./add");
const subtract = require("./subtract");
const multiple = require("./multiple");
const devide = require("./devide");

let a = 12;
let b = 6;
console.log(`addition = ${add(a,b)}`);
console.log(`subtract = ${subtract(a,b)}`);
console.log(`multiple=${multiple(a,b)}`);
console.log(`devide = ${devide(a,b)}`);