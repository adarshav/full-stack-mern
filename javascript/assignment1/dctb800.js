function sayAgain(str, num) {
   for(var i = 0;i < num;i++) {
        console.log(str);
   }
   return `${str} has repeated ${num} times`;
}
var num = 3;
var str = 'where r u';
console.log(sayAgain(str, num));