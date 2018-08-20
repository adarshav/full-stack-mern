/*
create object - car
properties - model, make, carstate(booelan)
methods - start, stop, drive
car.drive() - start the car first
car.start() - the engine started
car.stop() - the engine stopped
*/
var car = {
    model:'Alto k10',
    make:'Maruti',
    carState:false,
    xAxis: 0,
    start:function() {
        this.carState = true;
        return 'the engine started';
    },
    stop:function() {
        this.carState = false;
        return 'the engine stopped';
    },
    drive:function() {
        if(this.carState === true) {
            this.xAxis = this.xAxis + 1;
            return 'the car is moving';
        } else {
            return 'start the car first'
        }
    },
    currentPosition:function() {
        return `the car is at ${this.xAxis}`;
    },
    reverse:function() {
        this.xAxis --;
        return `the car is at reverse${this.xAxis}`;
    },
    reset:function() {
        this.xAxis = 0;
        this.carState = false;
        return ` X axis is at ${this.xAxis} and the carstate is ${this.carState}`;
    }
}
console.log(car.start());
console.log(car.drive());
console.log(car.drive());
console.log(car.currentPosition());
console.log(car.reverse());
console.log(car.stop());
console.log(car.reset());