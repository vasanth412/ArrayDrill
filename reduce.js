function testReduce(items, start){
    return reduce(items, callBack, start);
}

function reduce(elements, cb, start){
    if(start == undefined){
        start = elements[0];
        let index = 1;
        let sum = cb(elements, start, index);
        return sum;
    }else{
        let index = 0;
        let sum =  cb(elements, start, index);
        return sum;
    }
}
function callBack(items, start, index){
    let sum = start;
    for(index; index<items.length; index++){
        sum+=items[index];
    }
    return sum;
}
module.exports = testReduce;
