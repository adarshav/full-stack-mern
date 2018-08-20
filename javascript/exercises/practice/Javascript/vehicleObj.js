/*
create object - car
properties - model, make, carstate(booelan)
methods - start, stop, drive
car.drive() - start the car first
car.start() - the engine started
car.stop() - the engine stopped
*/
var car = {
    model:'k10',
    make:'maruthi Suzuki',
    carState:'false',
    xAxis:0,
    start:function() {
        this.carState = true;
        return 'car has started';
    },
    stop:function() {
        this.carState =false;
        return 'car is stopped';
    },
    drive:function() {
        if(this.carState === false) {
            return 'start the car first';
        } else {
            this.xAxis = this.xAxis + 1;
            return 'car is moving';
        }
    }
}
