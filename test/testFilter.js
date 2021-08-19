let filter = require("../filter.js");
const items = [1, 2, 3, 4, 5, 5];

function callBack(item){
    return item<5;
}

let result = filter(items, callBack)
console.log(result);
