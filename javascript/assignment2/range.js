function rangeBetween(a, b) {
    var number = [];
    for(var i = a;i <= b;i++) {
        number.push(i);
    }
    return number;
}

console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));
