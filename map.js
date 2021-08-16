function testMap(items){
    return map(items, callBack); 
}

function map(items, cb){
    return cb(items);
}

function callBack(elements){   
    let newArray = [];
    for(let item of elements){
    newArray.push(item);
     }
     return newArray;
}
module.exports = testMap;