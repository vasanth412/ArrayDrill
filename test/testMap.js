let map = require("../map.js");
const items = [1, 2, 3, 4, 5, 5];

let callBack = (value, index, array) => value*2;

let newArray = map(items, callBack);
console.log(newArray);