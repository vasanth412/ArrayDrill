let reduce = require("../reduce.js");

const items = [1, 2, 3, 4, 5, 5];
let start;
function callBack(items, start, index){
    let sum = start;
    for(index; index<items.length; index++){
        sum+=items[index];
    }
    return sum;
}
let sum = reduce(items,callBack, start);
console.log(sum);