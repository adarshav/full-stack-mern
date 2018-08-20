function capitalizeWords(str) {
var result = str.split(' ');
console.log(result);
var value = [];
//console.log(str.charAt(0).toUpperCase() + str.slice(1));
    for(var i = 0;i < result.length;i++) {
        value.push(result[i].charAt(0).toUpperCase() + result[i].slice(1));
    }
    return value.join(' ');
console.log(result.length);
}
console.log(capitalizeWords('make in india'));
console.log(capitalizeWords('hello world'));
