function each(items){
    return forEach(items, callBack);
}
function forEach(arr, cb){
    let i = 0;
    for(let value of arr){
        cb(value, i++);
    }
}

function callBack(value, index){
    console.log(`${value} ${index}`);
}
module.exports = each;
