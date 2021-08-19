function flatten(items){
let newArray = [];
    for(let i=0; i<items.length; i++){
        if(Array.isArray(items[i])){
            newArray = newArray.concat(flatten(items[i]));  //recursion
        }else{
        newArray.push(items[i]);
    }
}
    return newArray;
}

module.exports = flatten;