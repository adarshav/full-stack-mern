var numbers = [10, 20, 40, 50];
Array.prototype.deleteAt = function(index) {
    this.splice(index, 1);
    return this;
}
console.log(numbers.deleteAt(2));
Array.prototype.insertAt = function(index, value) {
    this.splice(index, 0, value);
    return this;
}
console.log(numbers.insertAt(1, 100));

var names = ['ramesh', 'veeresh', 'suresh', 'ramesh'];
Array.prototype.delete = function(name) {
    for(var i = 0;i< this.length;i++) {
        if(this[i] === name) {
            this.splice(i, 1);
        }
    }
    return this;
}
console.log(names.delete('ramesh'));