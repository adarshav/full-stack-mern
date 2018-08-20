var n1 = 10;
var n2 = 20;
 
function add() {
n1 = 100, n2 = 200;
return n1 + n2;
}
console.log(add());
console.log(n1);//300;because in a function n1 and n2 act as global variables [they are not declared as var]
console.log(n2);//200
console.log('------------------------------');
var a1 = 10;
var a2 = 20;
function add() {
 var a1 = 100, a2 = 200;
return a1 + a2;
}
console.log(add());//300
console.log(a1);//100
console.log(a2);//200
console.log('----------------------------');
var a1 = 15;
var a2 = 25;
function sum() {
    var a1 = 150;
    var a2 = 250;
    a1 = 1500;
    a2 = 2500;
    return a1 + a2;
}
console.log(sum());//400
console.log(a1);//15
console.log(a2);//25
