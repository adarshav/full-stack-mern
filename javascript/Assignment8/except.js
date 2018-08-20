function except(a, b) {
    var result = [];
    var total = [];
   
    for(var i = 0;i < a.length;i++) {
        for(var j = 0;j < b.length;j++) {
            if(a.indexOf(a[i]) === b[j]) {
                result.push(a[i]);
            }
        }
        if(result.indexOf(a[i]) === -1) {
            total.push(a[i]);
        }
    }
    return total;
}
var array = ['a', 'b', 'c', 'd', 'e'];
console.log(except(array, [1, 3]));//['a', 'c', 'e']
console.log(except(array, [1]));//['a', 'c', 'd', 'e']
