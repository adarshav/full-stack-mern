var products = [
    {
        name : 'sony xperia',
        id : 123456,
        price : 23000
    },
    {
        name:'one plus 6',
        id:456789,
        price:38000
    }
]

console.log(products);
console.log(products[0]);
console.log('--------------------');
console.log(products[0].name);
console.log(Object.keys(products[1].name));
for (var i = 1;i <= products.length;i++) {
    console.log(products[i]);
}
