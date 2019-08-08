console.log('Iam in utils.js');
const name = 'Adarsha';
const sum = function(a, b) {
    return a + b;
}

const hash = function(name) {
    console.log(name.split(' '));
    return '#' + name.charAt(0).toUpperCase() + name.slice(1);
}
module.exports = hash;
