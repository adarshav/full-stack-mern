function preFillValues(a, b) {
    var names = new Array(a);
    return names.fill(b);
    if(a === undefined) {
        return [];
    }
}
console.log(preFillValues(6, 0));
console.log(preFillValues(4, 4));
console.log(preFillValues(0, 4));