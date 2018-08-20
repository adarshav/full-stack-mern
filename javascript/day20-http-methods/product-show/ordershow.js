var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/users/16.json';
axios.get(url)
.then(function(response) {
    var product = response.data;
    var sum = 0 ;
    product.orders.forEach(function(order) {
        sum = sum + order.order_total 
    });
    if(sum > 15000) {
        console.log('prime customer');
    } else {
        console.log('non pime customer');
    }
    console.log(sum);
})