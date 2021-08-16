function testFind(items){
    return find(items, callBack);
}
function find(elements, cb){
    for(let item of elements){
        if(cb(item)){
            return item;
         }
    }
    return undefined;   
}
function callBack(item){
    return item>0;
}

module.exports = testFind;