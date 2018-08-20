/*
create object - car
properties - model, make, carstate(booelan)
methods - start, stop, drive
car.drive() - start the car first
car.start() - the engine started
car.stop() - the engine stopped
*/
function Vehicle(model, make, carState) {
    this.model = model;
    this.make = make;
    this.carState = carState;
    this.start = function() {
        this.carState = true;
        return 'car has started';
    }
    this.stop = function() {
       this.carState = false;
       return 'car is stopped'; 
    }
    this.drive = function() {
        if(this.carState === true) {
            return 'the car is moving';
        } else {
            return 'start the car first';
        }
    }
}
var c1 = new Vehicle('k10', 'maruti', false);