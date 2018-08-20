var distance = {
    source:'bangalore', 
    destination:'Mysore',
    distance:150,
    time:'3 hours, 30 minutes'
};
function distanceFormatter(distance) {
    return `The distance between ${distance.source} and ${distance.destination} is ${distance.distance} kms and the time taken is ${distance.time}.`;
}
console.log(distanceFormatter(distance));

var distanceArr = {
    source:['bangalore', 'karnataka'], 
    destination:['Mysore', 'karnataka'],
    distance:150,
    time:'3 hours, 30 minutes'
};
function distanceArray(distanceArr) {
    //console.log(distanceArr.source);
    return `the distance between ${distanceArr.source[0]}, ${distanceArr.source[1]}  and ${distanceArr.destination[0]}, ${distanceArr.destination[1]} is ${distanceArr.distance} kms and the time taken is ${distanceArr.time}`;
}

console.log(distanceArray(distanceArr));
