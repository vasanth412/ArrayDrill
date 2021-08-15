function forEach(arr, cb){
    let i = 0;
    for(let value of arr){
        cb(value, i++);
    }
}
module.exports = forEach;
