const {Counter} = require('./counter');
let c1 = new Counter();
c1.up();
c1.up();
console.log(c1.get());
c1.down();
console.log(c1.get());
c1.down();
console.log(c1.get());
c1.down();
console.log(c1.get());