
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
module.exports = reduce;
