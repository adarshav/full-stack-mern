function person() {
    //a variable defined inside a function, its availability is only within the function , these variables cannoot be accessed outside the function 
    //in javascript variables are function scoped
var city  = 'Bangalore';
console.log(city);
}
person();
//console.log(city);//cannot access the city variable that has been defined inside the person function
function movie() {
    //if variables are defined without keyword var, they become a global variable and are available outside the function 
    actor = 'jackie chan'
    console.log(actor);
}
movie();//function call
console.log(actor);