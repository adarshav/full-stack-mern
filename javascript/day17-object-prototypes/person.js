//person constructor should be created and use the greet method and return greeting with fistName and last name
function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
    this.greet = function() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}
var person1 = new Person('Adarsha', 'v');
console.log(person1.greet());