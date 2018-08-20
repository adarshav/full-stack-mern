//prototype property allows us to add prooperties and prototype property {array, object, string, number}
String.prototype.toCapitalize = function() {
    return this[0].toUpperCase() + this.slice(1);
}
var names = 'adarsha';
console.log(names.toCapitalize());
Array.prototype.unique = function(ele) {
    var result =[];
    this.forEach(function(ele) {
        if(result.indexOf(ele) < 0) {
        result.push(ele);
        }
    });
    return result;
}
var  numbers = [1, 3, 2, 4, 1, 5];
var names = ['asd','wert'];
console.log(numbers.unique());
Array.prototype.first = function() {
    return this[0];
}
console.log(numbers.first());
console.log(names.first());
String.prototype.camelCase = function() {
    var result = this.split(' ')
    var words = ' ';
    for(i = 0;i < result.length;i++) {
        //console.log(result[i]);
        words = result[i][0].toLowerCase() + result[i].slice(1);
         words = words + result [i][0].toUpperCase() + result[i].slice(1);
    }
    return words;
}
var fullName = 'rohit sharma';
console.log(fullName.camelCase());
