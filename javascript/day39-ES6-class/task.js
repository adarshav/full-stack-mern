class Task {
    constructor(name) {
        //instance properties
        this.name = name;
        this.isCompleted = false;
    }
    //instance method 
    details() {
        return `${this.name} - ${this.isCompleted}`;
    }
    //class method
    static all() {
        return Task.data;
    }
    //class method
    static info() {
        return 'Im a class method';
    }
    
}
//static property 
Task.data = [];
let t1 = new Task('go for a walk');
let t2 = new Task('chennagi oota maadu');
//console.log(t1.info());//t1.info is not a function
//t1-object of Task Class /instance of Task Class 
//any method or property belonging to an instance is called instance method or instance property
//console.log(t1.name);
//console.log(t1.isCompleted);
console.log(t1.details());
console.log(Task.isCompleted);//undefined
//console.log(Task.details());//Task.details() is not a function
//console.log(t1.info());//static method cannot be used by object
console.log(Task.info());//static method can be accessed by Class only
//data is defined as static property
console.log(t1.data);//undefined
console.log(Task.data);