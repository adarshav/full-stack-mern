const {Car} = require('./car');//now index.js file is being executed by taking the car.js files data

let c1 = new Car('Maruti 800', '1991', 'Maruti', 'Red', '345', 'Diesel', '4Seater');
console.log(c1.details());
console.log(c1.getPosition());
c1.move();
c1.move();
console.log(c1.getPosition());
c1.reverse();
console.log(c1.getPosition());
c1.reset();
console.log(c1.getPosition());



// let c2 = new Car('Alto 800', '1994', 'Maruti', 'black', '456', 'Petrol', '4Seater');
// console.log(c2.details());

// let c3 = new Car('Innova', '2000', 'Toyota', 'white', '342', 'Diesel', '8Seater');
// console.log(c3. details());