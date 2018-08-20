//setting default parameters values to functions 
//es5
function add(n1, n2) {
    var n1 = (typeof n1 !== 'undefined') ? n1: 20;
    var n2 = (typeof n2!== 'undefined') ? n2: 20;
    return n1 + n2;    
}
console.log(add(10, 20));
console.log(add());

//es6
console.log('--------------------------------------------------');
function sum(n1 = 0, n2 = 0) {//it takes default arguments as zero if parameters are given  it will be considered 
    return n1 + n2;
}
console.log(sum());
console.log(sum(10, 20));

