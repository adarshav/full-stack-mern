let player = {
    name:'virat',
    age:28,
    strikeRate:155.4
};
//console.log(player);
console.log(Object.keys(player).join(' '));//Object.keys and values always returns an array//once it returns an array, array operations can be performed on that type
console.log(Object.values(player));
console.log('name:', player.name);
console.log('Age:', player.age);
player.wife = 'Anushka Sharma';//adding a key and value to a object
console.log(player);
console.log(delete player.wife);//delete keyword is used to delete the property and value//and it returns boolean value
console.log(player);
