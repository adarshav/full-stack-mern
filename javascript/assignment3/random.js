function random(array) {
    if(array.length === 0 || array === undefined) {
        return 'empty array';
    }
    var rand = array[Math.floor(Math.random() * array.length)];
    return rand
    
}
var n = [100, 200, 300, 400];
console.log(random([1, 2, 3, 5, 6]));
console.log(n[Math.floor(Math.random() * n.length)]);
console.log(random([1, 3, 4, 420, 6]));