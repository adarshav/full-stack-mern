//object-enhancement
//es5
let person = {
    firstName:'Adarsha',
    lastName:'V Navada',
    city:'Udupi',
    details:function() {
        return `${this.firstName} comes from ${this.city}`;
    },
    greet:function(msg) {
        return `${this.firstName} says ${msg}`
    }
}

//es6

let student = {
    name:'Arjun',
    city:'Gulbarga',
    details() {
        return `${this.name} is from ${this.city}`; 
    },
    greet(msg) {
        return `${this.name} says ${msg}`;
    }
}

console.log(student.details());
console.log(student.greet('hi folks'));
