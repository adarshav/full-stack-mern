//immediaatly invoked function expression
//without arguments
(function() {
    console.log('Iam  great');
    console.log('God is great');
    console.log('therefore Iam God');
}) ();//here this is a invoking a function 
//these are called iife's
//with arguments
(function(n1, n2) {
    return n1 + n2;
}) (10, 11);