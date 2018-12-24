class Car {
    constructor(data) {
        this.name = data.name
        this.make = data.make
    }
    start() {//instance methods
        return `${this.name} has started`
    }
    stop(){
        return `${this.name} has stopped`
    }
    //class methods || static methods
    static family() {
        return `${this.name } belongs to the vehicle family`
    }
}
let c1 = new Car({name:'swift', make:'maruti'})
console.log(c1.start());
console.log(c1.stop());
console.log(Car.family());

