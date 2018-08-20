//declarative programming
var numbers = [10, 15, 20, 25, 30, 35];
var result = numbers.filter(function(n){ //this is a filter method  used only in arrays and it is callBack function
    return n % 2 === 0;//test case should be followed after filter method and it will traverse until the end of the array
});
console.log(result);
function isEleFound(numbers, element) {
var isEle = numbers.filter((n) => {//usage of arrow functions 
    return n === element
});
return isEle;
}
var element = 25;
console.log(isEleFound(numbers, element));

function filterStrValues() {
var str = values.filter((v) => {
    return typeof(v) === 'string'
    });
    return str;
}
var values = ['dct', 'academy', 56001, 'bangalore', 430]
console.log(filterStrValues(values));

function filterNumValues(values) {
var num = values.filter((v) => {
    return typeof(v) === 'number';
});
return num;
}
console.log(filterNumValues(values));
console.log('--------------------------');
function filterValues(values, type) {
    var n = values.filter(v => typeof(v) === 'string');//arrow function 
    return n;
}
console.log(filterValues(values, 'string'));