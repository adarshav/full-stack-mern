var product = {
    name:'Marker',
    price:15
}
console.log(product);
console.log(product.name);
console.log(product['name']);
console.log(Object.keys(product));
console.log(Object.values(product));
//checking of values whether it is present or not
console.log(Object.values(product).includes('description'));//includes is an array method and it cannot be accessed on object hence some of the values are converted to array using object methods and there array methods can be implemented
//But keys or properties in object can be checked
console.log(product.hasOwnProperty('price'));
//a new property can be addded directly
product.currencyType = 'Rupee';
console.log(product);
console.log(product.color = 'Blue');//returns the item to be added
console.log(product);
//a property  can be deleted using delete keyword
delete product.price;
console.log(product);
console.log(delete product.currencyType);
console.log(delete product.detail);
console.log(product);
