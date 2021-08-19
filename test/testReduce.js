let reduce = require("../reduce.js");

const items = [1, 2, 3, 4, 5, 5];
let startingVaue = 0;

let callBack = (accumulator, item) => accumulator+item;
let sum = reduce(items, callBack, startingVaue);
console.log(sum);