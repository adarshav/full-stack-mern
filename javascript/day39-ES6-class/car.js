class Car {
    constructor(name, make, model, color, brand, fuelType, seater, xAxis) {
        this.name = name,
        this.make = make,
        this.model = model,
        this.color = color,
        this.brand = brand,
        this.fuelType = fuelType,
        this.seater = seater,
        this.xAxis = 0;
    };
    details() {
        return `${this.name} ${this.make} ${this.model} ${this.color} ${this.brand} ${this.seater}`;
    }
    reset() {
        this.xAxis = 0;
    }
    getPosition() {
        return `${this.name} ${this.xAxis}`;
    }
    move() {
        this.xAxis++;
        return this.xAxis;
    }
    reverse() {
        this.xAxis--;
        return this.xAxis;
    }
}

module.exports = {
    Car
}


