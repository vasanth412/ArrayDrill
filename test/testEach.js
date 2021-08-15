const forEach = require("../each.js");
const items = [1, 2, 3, 4, 5, 5];

function callBack(value, index){
    console.log(`${value} ${index}`);
}

forEach(items,callBack);
