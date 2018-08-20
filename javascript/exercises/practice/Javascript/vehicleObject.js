/*
create object - car
properties - model, make, carstate(booelan)
methods - start, stop, drive
car.drive() - start the car first
car.start() - the engine started
car.stop() - the engine stopped
*/
let car = {
    "model":"MarutiSwift",
    "make":2015,
    "carState":false,
    "xAxis":0,
    start:function() {
        if(this.carState === false) {
            this.carState = true;
            return `car has started`;
        }else {
            return `car has already  started dear, where are you??`;
        }
    },
    drive:function() {
        if(this.carState == true) {
            this.xAxis = this.xAxis + 1;
            return `car is on moving state`;
        } else {
            return `start the car first dear!!`;
        }
    },
    reverse:function() {
        if(this.carState == true) {
            this.xAxis--;
            return `car is cominng in reverse direction`;
        }
    },
    currentPosition:function() {
        return `${this.model} is in ${this.xAxis}`;
    },
    stop:function() {
        if(this.carState === true) {
            this.carState = false;
            return `car has stopped`;
        } else {
            return `car should be started before stopping`;
        }
    }
}

//console.log(car.currentPosition());
console.log(car.start());
//console.log(car.start());
console.log(car.currentPosition());
