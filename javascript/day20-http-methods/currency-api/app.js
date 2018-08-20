var axios = require('axios');
var url = ' http://free.currencyconverterapi.com/api/v5/convert?q=INR_USD&compact=y';
axios.get(url)
.then(function(response) {
    var value = response.data.INR_USD.val;
    //console.log(value);
    function convertor(inr) {
        var result = value * inr;
        return result.toFixed(2);//it is a method to round upto 2 decimal places
    }
    console.log(convertor(60));
})
.catch(function(error) {
console.log(error);
}) 