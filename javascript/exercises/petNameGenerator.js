/*
Write a function, petNameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as that person's pet name! If the 3rd letter is a vowel, return the first 4 letters.

Examples:

INPUT: petNameGenerator('Sachin')
OUTPUT: 'Sac'
INPUT: petNameGenerator('Elon')
OUTPUT: 'Elon'
*/
function petNameGenerator(name) {
    let result = name.slice(0, 3);
    //console.log(name.slice(0, 4));
    let total = '';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0;i < vowels.length;i++) {
        if(name.charAt(3-1) === vowels[i]) {
            console.log(name.slice(0, 4))
        }else {
            total = name.slice(0, 3);
        }
    }
    return total;
}
console.log(petNameGenerator('Sachin'));
console.log(petNameGenerator('Elon'));
