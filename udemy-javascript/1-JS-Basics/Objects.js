//creating objects using function constructor
// var adarsha = {
//     name:'Adarsha',
//     yearOfBirth:1996,
//     job:'Full Stack Developer'
// };

//function constructor
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//it acts like inheritence not only methods, properties can also be done
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}
//prototype property of the function constructor
Person.prototype.lastName = 'Shastri';

var adarsha = new Person('Adarsha', 1996, 'Full Stack developer');
// console.log(adarsha);
adarsha.calculateAge();
var radha = new Person('Radha', 1994, 'Antenna engineer');
console.log(radha.lastName);
radha.calculateAge();

var Animal = function(name, type) {
    this.name = name;
    this.type = type;
}
Animal.prototype.isLand = 'NO';
var parrot = new Animal('parrot', 'bird');
console.log(parrot);
console.log(parrot.isLand);
*/


/*
    everything in javascript is considered as object and object has prototypes, methods and properties
*/

//Another method instead of function constructor
// var personProto = {
//     calculateAge:function() {
//         console.log(2019-this.yearOfBirth);
//     }
// }

// var deepika = Object.create(personProto);
// deepika.name = 'Deeksha';
// deepika.lastName = 'DV';
// deepika.yearOfBirth = 1996;
// deepika.job = 'software developer';
// console.log(deepika);
// deepika.calculateAge();

var shantha = Object.create(personProto, {
        name: {value: 'Shantha'},
        lastName: {value: 'GN'},
        yearOfBirth:{value:1971},
        job: {value: 'House Wife'}
});

console.log(shantha)