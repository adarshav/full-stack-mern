var distanceArr = {
    source:['bangalore', 'karnataka'], 
    destination:['Mysore', 'karnataka'],
    distance:150,
    time:'3 hours, 30 minutes'
};

function distanceFormatter(distance) {
    return `The distance between ${distanceArr.source[0]}, ${distanceArr.source[1]} to ${distanceArr.destination[0]}, ${distanceArr.destination[1]} is ${distanceArr.distance} kms is ${distanceArr.time} `;
}
console.log(distanceFormatter(distanceArr));