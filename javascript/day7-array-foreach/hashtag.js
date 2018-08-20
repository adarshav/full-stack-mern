function hashTagGenerator(str) {
var string = str.split(' ');
var words = '#';
    for(var i = 0;i < string.length;i++) {
        words = words + string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return words;
//console.log(string.length);
//console.log(string[1].charAt(0).toUpperCase());
//return string
}
var str = 'hello world';
var value = 'make in india';
console.log(hashTagGenerator(str));
console.log(hashTagGenerator(value));