/*
convert an object into a list of key-value pairs
Write a JavaScript function to convert an object into a list of `[key, value]` pairs

Sample:   keyValue({'name':'Rama','city':'Ayodya'})

Output:   [['name','Rama'],['city','Ayodya']]
*/
var names = {
    name:'Rama',
    city:'Ayodhya'
};
//console.log(names);
function keyValue(names) {
    var array = [];
    array.push(names);
    //return array;
    

    array.forEach(function(value) {
        console.log(`${value[0]}, ${value.name}, ${value[1]} ${value.city}`);
    });
}
console.log(keyValue(names));
