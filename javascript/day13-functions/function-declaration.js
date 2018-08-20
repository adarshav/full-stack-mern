function hello() {//declaration of function

}
console.log(hello());//calling or invoking the function 
//whereever you write the function, it will be scanned and will be placed first and interpreter  inteerpretes the calling of function and this process is known as Hoisting of function

function sayHi(name) {
    return 'hi '  + name ;
}
var name = 'deepika';
console.log(sayHi(name));//we can declare it in other ways by directly assigning name as function parameter

function sayHello(firstName) {//parameter
return `hello ${firstName}`;
}
console.log(sayHello('adarsha'));//argument
console.log(sayHello('asd'));//to one function different arguments can be given

function greeting(name) {
return `welcome ${name}`;
}
var firstName = 'qwerty';
console.log(greeting(name));//if argument is different froom mentioned it will first search in function(local) and comes to global varables  