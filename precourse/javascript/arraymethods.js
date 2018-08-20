var actress = ['anushka sharma', 'anushka shetty', 'rashmika mandanna', 'kriti kharabanda'];
console.log(actress.length);
console.log(actress);
console.log('---------------------------');
//console.log('the length of the name \t' + actress[0] '\t is \t' + actress[0].length);
actress.push('sai pallavi'); //inserts at last
console.log(actress);
actress.unshift('Radhika pandith'); // inserts the element at 1st position
console.log(actress);
console.log(actress.push('ashika ranganath'));
console.log('----------------------------');
console.log(actress);
console.log(actress.pop());//deletes at last
console.log(actress);
console.log(actress.shift());//deletes at first
console.log(actress);
console.log(actress.includes('ramya'));//it checks whether it has that item or not
//function to check an item and add the same 
function add(a) {
    if(actress.includes('ramya') === true) {
        return;
    }
    else {
        actress.push('ramya');
        
    }
    return;
}
console.log(add(0));
console.log(actress);//dispalys the array items
console.log(actress.includes('anushka shetty'));//includes()method returns the boolean value
console.log(actress.pop());
console.log(actress);
