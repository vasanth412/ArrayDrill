function testFilter(items){
    return filter(items, callBack);
}

function filter(elements, cb){
    let newArray = [];
    for(let element of elements){
        if(cb(element)){
            newArray.push(element);
        }
    }
    return newArray;  
}
function callBack(item){
    return item<5;
}

module.exports = testFilter;