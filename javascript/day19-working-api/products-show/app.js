/*
1. create a package.json file  (npm init)
2. install axios  locally (npm  install --save axios)
3. using axios - goto http://dct-api-data.herokuapp.com/products/301.json
4. dispaly the data you get  back 'name - price - category'
*/
var axios = require('axios');
var url = ' http://dct-api-data.herokuapp.com/products/301.json';
axios.get(url) 
.then(function(response) {
    var products = response.data;
    console.log(`${products.name} INR ${products.price} and ${products.category}`);
})
.catch(function(error) {
    console.log(error);
});