//object constructor function
function Car(data) {
    this.id = Math.round(Math.random() * 10)
    this.name = data.name
    this.make = data.make

    this.start =function() {
        return `${this.name} has started`
    }

    this.stop = function() {
        return `${this.name } has stopped`
    }
}

let c1 = new Car({name:'swift', make:'maruti'});
console.log(c1.start());
console.log(c1.stop());
