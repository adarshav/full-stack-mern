var student = {
    name:'Adarsha',
    city:'Bangalore',
    education:'MCA',
    college:'PES',
    sayName:function() {//when a property holds a function as its value that property is known as a method
        return `My name is ${this.name}`;
    },
    whichCity:function() {
        return `I'm from ${this.city}`;
    },
    myEducation:function() {
        return `my educaation is ${this.education}`;
    }
}
console.log(student);
console.log(student.sayName());
console.log(student.whichCity());
console.log(student.myEducation());