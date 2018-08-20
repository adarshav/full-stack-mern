function isDivisible(n, x, y) //checking if a number n is divisible by two numbers x and y
{
   /*if((n >= 0) && (x >= 0) && (y >= 0))
    {
        console.log('good');
    }
    else {
        console.log('please enter +ve num');
    }*/
    if((n % x == 0) && (n % y == 0))
        {
            return true;
        }
    else {
        return false;
    }
}

console.log(isDivisible(2, 1, 3));
//console.log(isDivisible(12, 2, 6));
