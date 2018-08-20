function first(a, b) {
    if(a.length === 0) {
        return [];
    } else if(b < 0 || b > a.length) {
        return a;
    } else if(b === undefined) {
        return a[0];
    }
        var array = [];
        for(var i = 0;i < b;i++) {
            array.push(a[i]); 
        }
        return array;
}
var a = [1, 3, 5, 7, 9], b = 7;

console.log(first(a, b));