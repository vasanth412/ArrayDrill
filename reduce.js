function reduce(elements, cb, start){

    let index = 0;

    if(start == undefined){

        start = elements[0];
        index = 1;
    }

    let accumulator = start;
    for(let i=index; i<elements.length; i++){

        accumulator =  cb(accumulator, elements[i]);
    }
    return accumulator;
}

module.exports = reduce;
