let find = require("../find.js");

const items = [1, 2, 3, 4, 5, 5];

let callBack = (item) => (item > 2);

let result = find(items, callBack);
console.log(result);