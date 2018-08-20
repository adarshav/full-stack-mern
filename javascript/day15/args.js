var details = function(name, city) {
console.log(name);
console.log(city);
console.log(arguments);
}
//equal arguments and parameters
details('adarsha', 'saligrama');

//1 extra arguments, being ignored in parameters list, but still available in arguments
details('adarsha', 'saligrama', '123456789');

//1 less, parameters now holds undefined  for the missing arguments
details('ani');