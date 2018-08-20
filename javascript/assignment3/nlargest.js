function nthlargest(a, b) {
    var result;
    result = a.sort();
    return result[b];
    //console.log(result);
}
var a = [10, 20, 1, 7, 12];
var b = 2;
console.log(nthlargest(a, b));