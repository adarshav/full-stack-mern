/*
    Define a function calculate total to find the cart total and cartline items are here
*/
var cart = [
    {
        name:'Airmax 2017',
        price:3299,
        quantity:2
    },
    {
        name:'Mac book Pro',
        price:50000,
        quantity:1
    }
];
function total(cart) {
    var sum = 0;
    for(var i = 1;i <= cart.length;i++) {
         console.log(cart[i].price * cart[i].quantity);
    }
    cart.forEach(function(item) {
        sum = sum + item.price * item.quantity; 
    })
    return sum;
}

console.log(total(cart));
