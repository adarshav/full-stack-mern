var name = 'Rakesh';
var skills = ['js', 'rb', 'py'];
var result = [];
var output = skills.map(function(skill) {//map is an ES6 Javascript, differenece between forEach and map :in forEach 
    return `${name} knows ${skill}`;
});
console.log(output);