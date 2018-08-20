let person = {
    firstName:'Adarsha',
    lastName:'V Navada',
    city:'Udupi',
    skills:['js', 'rb', 'py']
}

//es6
let {firstName, lastName, city, skills} = person;
console.log(`Iam ${firstName}${lastName} i come from ${city} and i accomplish some of the skills they are ${skills}`   );


