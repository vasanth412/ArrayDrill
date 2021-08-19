function map(items, cb){

    let newArray = [];
    for(let index=0; index<items.length; index++){
    newArray.push(cb(items[index], index, items));
     }
     return newArray;
}
module.exports = map;