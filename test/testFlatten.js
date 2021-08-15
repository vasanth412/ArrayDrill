let flatten = require("../flatten.js");

const items = [1, [2], [[3]], [[[4]]]]; 
let newArray = flatten(items);
console.log(newArray);