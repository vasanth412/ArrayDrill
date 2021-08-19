const each = require("../each.js");
const items = [1, 2, 3, 4, 5, 5];

let callBack = (value, index, array) => {  // passing element, index, and array
    console.log(value, index)
}

each(items, callBack);
