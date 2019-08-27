//normal function
// const square = function(x) {
//     return x * x;
// }

//ES6 or arrow functions
// const square = (x) => {
//     return x * x;
// }

//Short hand syntax, if the executable statement is only one line and remember this shorthand syntax cannot be used if the return statements is in more than one line
// const square = (x) => x * x;
// console.log(square(2));

//another set
let event = {
    name:'Birthday Party',
    guessList:['Adarsha', 'Modi', 'Amith Shah'],
    printGuessList()  {
        const that = this;
        console.log(`the Guests are for ${this.name}` );
        this.guessList.forEach(function(guest) {
            console.log(`${guest} is attending the ${that.name}`);
        })
    }
}
event.printGuessList();