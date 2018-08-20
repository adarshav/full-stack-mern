let obj1 = {
    n1:10
};
let obj2 = {
    n2:20
};
function addObject(obj1, obj2) {
    return obj1.n1 + obj2.n2;
}
console.log(addObject(obj1, obj2));//returns 30

var obj3 = {
    evens:[10, 20, 30]
};
var obj4 = {
    odds:[15, 25, 35]
};

function oddEvenSum(obj3, obj4) {
    let evens = 0;
    let odds = 0;
    for(var i = 0;i < obj3.evens.length;i++) {
        evens = evens + (obj3.evens[i]);
    }
    for(var j = 0;j < obj4.odds.length;j++) {
        odds = odds + (obj4.odds[j]);
    }
    return [evens, odds];
}
console.log(oddEvenSum(obj3, obj4));///returns [ 60, 75 ]