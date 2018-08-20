var name;
console.log(name);
name = 'adarsha';
console.log(name);
var city = 'bangalore';
console.log(city);
var state = 'karnataka', country = 'India';
console.log(state);
console.log(country);
//here starts an object
//this should be done hile developing an web application
var personal = {
    name : 'adarsha',
    city :'bangalore',
    state: 'karnataka',
    country :'india',
    details :{
        number :'9663304987'
    },
    getdetails : function() {
        return this.name + ' ' + this.city + ' ' +this.state + ' ' +this.country;
    }
}
console.log(personal);
console.log(personal.name);
console.log(personal.getdetails());
console.log(Object.keys(personal));
console.log(Object.values(personal));