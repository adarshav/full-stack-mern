var names = ['ramesh', 'suresh', 'rajesh'];
names.forEach((name) => {
    console.log(name.toUpperCase());
});// forEach loop is applicable for only array not for strings and objects it uses anonymous function which takes seperate value[]
//it cannot be accessed via index while we have 2 play via indexes v can use  for loop
names.forEach((name, index) => {
    console.log(`${name} is found in ${index} index`);
});