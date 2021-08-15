let map = require("../map.js");
const items = [1, 2, 3, 4, 5, 5];
function callBack(elements){   
    let newArray = [];
    for(let item of elements){
    newArray.push(item);
     }
     return newArray;
}
let newArray = map(items, callBack);
console.log(newArray);