function filter(elements, cb){
    let newArray = [];
    for(let element of elements){
        if(cb(element)){
            newArray.push(element);
        }
    }
    return newArray;  
}

module.exports = filter;