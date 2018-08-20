var product = {
    name:'Marker', 
    price:15
}
console.log(Object.keys(product));//returns name, price
console.log(Object.values(product));
//An object can be accessed using 2 methods 1) Dot operator 2) square brackets
console.log(product.name);
console.log(product['name']);
console.log('-------------------------------');
console.log(Object.values(product).includes('description'));//includes method works only with arrays and not objects 
console.log(product.hasOwnProperty('name'));//it returns true
// it checks the property or key has that particular or not
product.description  = 'white board marker';//adding a new propert onto an object
console.log(product); 
delete product.description;//deleting a property from an object
console.log(product);
for(var key in product) {
    console.log(`${key} - ${product[key]}`);
}