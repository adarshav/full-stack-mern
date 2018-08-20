var obj1 = {
    evens:[10, 20, 30]
};
var obj2 = {
    odds:[15, 25, 35]
};

function addObj(obj1, obj2) {
    return `the sum of those two objects are ${obj1.n1 + obj2.n2}`;
}
console.log(addObj(obj1, obj2));
console.log('--------------------------------');
function addArray(obj1, obj2) {
    var evenSum = 0;
    obj1.evens.forEach(function(value) {
        evenSum = evenSum + value;
    });
    var count= 0;
    obj2.odds.forEach(function(value) {
        count ++;
    });
    return [evenSum, count];
}
console.log(addArray(obj1, obj2));
console.log('----------------------------------------------');
var array = [12, 23, 1, 4, 5, 7];
function countArray(array) {
    var sum = 0, count = 0;
array.forEach(function(value) {
    if(value % 2 === 0) {
        sum = sum + value;
    } else {
        count++;
    }
});
    return [sum, count];
}
console.log(countArray(array));//returning the sum of even elemeents in an array and also return all odd elements count in an array

