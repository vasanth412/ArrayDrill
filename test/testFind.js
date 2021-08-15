let find = require("../find.js");

function callBack(item){
    return item>0;
}
const items = [1, 2, 3, 4, 5, 5];
let result = find(items, callBack);
console.log(result);