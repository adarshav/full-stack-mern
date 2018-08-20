let add = (a = 0, b = 0) => {
    return a + b;
}

let sub = (a = 0, b = 0) => {
    return a - b;
}

let city = 'bangalore';

module.exports = {
    add, //it is equal to add:add
    sub, //it is equal to sub:sub
    city //it is equal to city:city
    //this can be done when key is same as valuehence it can be done if not it should be done as previous
}