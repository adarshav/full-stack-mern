/*
1. Create a class called Employee that includes three pieces of information as instance variables—a first name  , a last name  and a monthly salary. Your class should have a constructor that initializes the three instance variables. If the monthly salary is not positive, set it to 0.0. Create two Employee objects and display each object’s yearly salary. Then give each Employee a 10% raise and display each Employee’s yearly salary again.
*/
class Employee {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    yearly() {
        this.salary = this.salary * 12;
        return this.salary;
    }
    hike() {
        var salHike = this.salary * 0.1;
        this.salary = this.salary + salHike
        return this.salary;
    }
}
var e1 = new Employee('Radha', 'Krishna', 10000);
e1.yearly();
e1.hike();
e1.yearly();
console.log(e1.salary);