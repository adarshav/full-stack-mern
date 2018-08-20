var obj1 = {
    n1:10
};
var obj2 = {
    n2:20
};
function addObj(obj1, obj2) {
    var temp = '';
    temp = temp + (obj1.n1 + obj2.n2);
    return temp;
    /* return obj1.n1 + obj2.n2 */
}
console.log(addObj(obj1, obj2));//returns 30

var obj1 = {
    evens:[10, 20 ,30]
};
var obj2 = {
    odds:[15, 25, 35]
};
function addEvenOddsObj(obj1, obj2) {
//console.log(obj1.evens);
console.log(obj1.evens.length);
console.log(obj1.evens[1]);
var evenSum = 0, oddSum = 0;
for(var i = 0;i < obj1.evens.length;i++) {
    evenSum = evenSum + (obj1.evens[i]);
}
obj2.odds.forEach(function(value) {
    oddSum = oddSum + value;
});
//return oddSum;
return [evenSum, oddSum];


//return evenSum;
}
console.log(addEvenOddsObj(obj1, obj2));
