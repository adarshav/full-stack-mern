//es5
function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName

    this.details = function() {
        return this.firstName + ' ' + this.lastName;
    };

    this.greet = function() {
        return 'Welcome' + ' ' + this.firstName;
    };
}

var p1 = new Person('Ravi', 'DL');
console.log(p1.details());//returns Ravi DL
console.log(p1.greet());//returns Welcome Ravi

var p2 = new Person('Madhu', 'priya');
console.log(p2.details());
console.log(p2.greet());

//es6

class Player {
    constructor(name, average) {
        this.name = name,
        this.average = average
    };
    details() {
        return this.name + ' ' + this.average;
    }
    greet() {
        return `Welcome to the karnataka Mr ${this.name}`;
    }
}
let player1 = new Player('Dhoni', 34.5);
console.log(player1.details());
console.log(player1.greet());

class Students {
    constructor(name, attendance) {
        this.name = name,
        this.attendance = attendance
    };
    review() {
        if(this.attendance > 80) {
           return `Good performance ${this.name}`;
        } else {
            return `Could do better ${this.name}`
        }
        
    }
    
}

let s1 =  new Students('Adarsha', 78.7);
console.log(s1.review());
let s2 = new Students('Radha', 89.3);
console.log(s2.review());