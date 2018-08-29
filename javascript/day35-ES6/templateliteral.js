var source = 'bangalore';
var distance = '3hours';
var destinstion = 'mysore';
var timeTaken = '3hours, 30 mins';
var computeTime = function(speed) {
    return distance / speed;
}
console.log(`the time taken at a speed of 50 is ${computeTime(50)}`);

//Multi line strings 

console.log(`hello`
`world`);
