const products = require('./data-products.js');
var amount = [];
var sum = 0;

var items = products.data;
items.forEach(function(item) {
    console.log(` the name of the product is ${item.name}`);
    sum = sum + item.price
});
// amount.forEach(function(value) {
//     sum = sum + value;
// });
 console.log(sum);