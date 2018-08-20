//es5
var person = {
    firstName:'ravi',
    skills:['js', 'rb', 'py'],
    details: function() {
        var that = this;
        this.skills.forEach(function(skill) {
            console.log(`${that.firstName} knows ${skill}`);
        });
    }
}

console.log(person.details());
//another method by using bind
var person = {
    firstName:'ravi',
    skills:['js', 'rb', 'py'],
    details: function() {
        this.skills.forEach(function(skill) {
            console.log(`${this.firstName} knows ${skill}`);
        }.bind(this));
    }
}
console.log(person.details());

//es6- under anonymous function the this key is not bound to the function

var person = {
    firstName:'ramesh',
    skills:['js','rb', 'py'],
    details: function() {
        this.skills.forEach((skill) => {
            console.log(`${this.firstName} knows ${skill}`);
        });
    }
}
person.details();
