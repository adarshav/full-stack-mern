//whenever we pass primitive datatype(number,string,null) as an argument to function it always makes the copy of data
var number = 10;
var name = 'adu';
var isTrue = true;
function setNumber(number) {
    number =100;
    console.log(number);
}
function setName(name) {
name = 'adarsha';
console.log(name);
}
function setBoolean(isTrue) {
isTrue = false;
console.log(isTrue);
}
setNumber(number);
console.log(number);
setName(name);
console.log(name);
setBoolean(isTrue);
console.log(isTrue);