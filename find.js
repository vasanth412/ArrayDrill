function find(elements, cb){
    for(let item of elements){
        if(cb(item)){
            return item;
         }
    }
    return undefined;   
}

module.exports = find;