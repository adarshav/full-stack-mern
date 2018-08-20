//an object is unordered keyindex collection of  values 
var product = {
    //key:value
    name :'Marker',
    price:25,
    units:5,
    maker:'camlin'
};
console.log(product.name);//marker
console.log(product['price']);//25
//it can also be placed in this type
var player = { name:'virat', captain:true, battingAvg:150.5, country:'India',age:30};
console.log(player);
console.log('name', player.name); //comma can be placed instead of +
console.log('captain', player.captain);
console.log('age', player.age);
