//url - http://dct-api-data.herokuapp.com/products.json
//Node js(non blocking I/O) when we are interacting with server these requests are pulled to background and other functions are executed line by line 
var axios = require('axios');//axios is responsible for talking to server for execution in command prompt
var url  = 'http://dct-api-data.herokuapp.com/products.json';
axios.get(url)//no semicolan//axios is not api its a package

.then(function(response) {
    var result, count = 0;
    var products = response.data;
    // products.sort(function(a, b) {//sorting based on price in descending order 
    //     return b.price - a.price;
    // });
    // console.log('Listing products', products.length);
    // products.forEach(function(product) {
    //     console.log(product.name,"\t", product.price,"\t", product.category);
     products.forEach(function(product) {
        if(product.category === 'Grocery') {
            console.log(product.name);
        }
     });
     products.forEach(function(product) {
        if(product.cod === false) {
            count++;
        }
        
     });
     products.forEach(function(product) {
        if(product.stock === 0) {
            console.log(product.name);
        }
     });
     console.log('--------------------------------------------');
     var result = products.filter(function(product) {
        return product.price > 2500;
     });
     console.log('--------------------------------------------');
     var result = products.filter(function(product) {
        return product.price > 2500 < 3500;
     });
     console.log(result);
     console.log(count);
    });
    