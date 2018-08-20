function evenOdd(numbers) {
    for(let i = 0;i < numbers.length;i++) {
        if(numbers[i] % 2 == 0) {
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
        
    }
    even.join(' ');
    odd.join(' ');
    return even, odd;
}
let numbers = [2, 3, 5, 6, 7];
let even = [];
let odd = [];

console.log(evenOdd(numbers));