let testReduce = require("../reduce.js");

const items = [1, 2, 3, 4, 5, 5];
let start;

let sum = testReduce(items, start);
console.log(sum);